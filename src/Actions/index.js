import * as actionTypes from './types';

export const LoginUser = user => {
	return {
		type: actionTypes.LOGIN_USER,
		payload: { user },
	};
};

export const LogotUser = () => {
	return {
		type: actionTypes.LOGOUT_USER,
	};
};
