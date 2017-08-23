import {connect} from 'react-redux';
import * as actions from '../actions';
import Users from '../components/Users';
import {getOriginalState, dirtyableComponent} from 'redux-dirty';

export default dirtyableComponent(
	connect(
	    state => ({
	        users: getOriginalState(state.users)
	    }), {
	    	onReload: actions.fetchUsers
	    }
	)(Users),
	state => state.users,
	actions.fetchUsers
);