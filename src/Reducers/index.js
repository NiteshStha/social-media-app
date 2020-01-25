import { combineReducers } from 'redux';
import * as actionTypes from '../Actions/types';

const INITIAL_LOGIN_STATE = {
	user: '',
	loginState: false,
};

const loginReducer = (state = INITIAL_LOGIN_STATE, action) => {
	switch (action.type) {
		case actionTypes.LOGIN_USER:
			return {
				...state,
				user: action.payload.user,
				loginState: true,
			};
		case actionTypes.LOGOUT_USER:
			return {
				...state,
				user: '',
				loginState: false,
			};
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	loginReducer,
});

export default rootReducer;
