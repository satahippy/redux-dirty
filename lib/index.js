import React from 'react';
import {connect} from 'react-redux';

const loadingActionType = (prefix) => `${prefix}_LOADING`;
const markDirtyActionType = (prefix) => `${prefix}_MARK_DIRTY`;
const markNotDirtyActionType = (prefix) => `${prefix}_MARK_NOT_DIRTY`;

export const getOriginalState = (dirtyableState) => dirtyableState.original;

export const dirtyableReducer = (reducer, dirtyId) => {
	return (state = {isDirty: true, isLoading: false}, action) => {
		let newState;
		switch (action.type) {
			case loadingActionType(dirtyId):
				newState = {...state, isLoading: true};
				break;
			case markDirtyActionType(dirtyId):
				newState = {...state, isLoading: false, isDirty: true};
				break;
			case markNotDirtyActionType(dirtyId):
				newState = {...state, isLoading: false, isDirty: false};
				break;
			default:
				newState = state;
		}

		const newOriginalState = reducer(state.original, action);
		if (newOriginalState !== state.original) {
			newState = {...newState, original: newOriginalState};
		}

		return newState;
	}
};

export const dirtyableComponent = (Component, stateSelector, refreshAction) => connect(
    state => ({
        isDirty: stateSelector(state).isDirty,
        isLoading: stateSelector(state).isLoading
    }), {
    	refresh: refreshAction
    }
)(
	class extends React.Component {
        componentDidMount() {
            this.checkNeedRefresh();
		}

        componentDidUpdate() {
            this.checkNeedRefresh();
        }

        checkNeedRefresh() {
            const {refresh, isDirty, isLoading} = this.props;
            if (isDirty && !isLoading) {
                refresh();
            }
		}

	    render() {
	      return <Component {...this.props}/>
	    }
	}
);

// using function because arrow functions do not support arguments
export const refreshAction = (actionCreator, dirtyId) => function() {
	return dispatch => {
		dispatch({type: loadingActionType(dirtyId)})
		dispatch(actionCreator.apply(this, arguments))
			.then(() => {dispatch({type: markNotDirtyActionType(dirtyId)})});
	}
};

// using function because arrow functions do not support arguments
export const dirtyAction = (actionCreator, dirtyId) => function() {
	return dispatch => {
		dispatch(actionCreator.apply(this, arguments))
			.then(() => {dispatch({type: markDirtyActionType(dirtyId)})});
	}
};