import * as actions from './actions';
import {dirtyableReducer} from 'redux-dirty';

const users = (state = [], action) => {
	switch (action.type) {
		case actions.USERS_FETCHED:
			return action.users;
		default:
			return state;
	}
};

export default dirtyableReducer(users, 'USERS');