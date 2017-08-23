import delay from 'delay';
import {refreshAction, dirtyAction} from 'redux-dirty';

export const USERS_CREATED = 'USERS_CREATED';
export const USERS_FETCHED = 'USERS_FETCHED';

const users = [
	{
		name: 'test1'
	},
	{
		name: 'test2'
	}
];

const getUsers = () => {
	return [...users];
};

export const createUser = dirtyAction(user => dispatch => {
	return delay(500)
		.then(() => users.push(user))
		.then(() => dispatch({
			type: 'USERS_CREATED',
			user
		}))
}, 'USERS');

export const fetchUsers = refreshAction(() => dispatch => {
	return delay(500)
		.then(() => dispatch({
			type: 'USERS_FETCHED',
			users: getUsers()
		}))
}, 'USERS');