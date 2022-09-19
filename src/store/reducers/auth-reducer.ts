// import * as ACTION_TYPES from "../actions/action-types";

import { actionsTypes } from "../actions/action-types";

export const initialState = {
	is_authenticated: false,
	profile: null,
};

type actionType = {
	payload: string;
} & actionsTypes;

export const AuthReducer = (state = initialState, action: actionType) => {
	switch (action) {
		case "LOGIN_SUCCESS":
			return {
				...state,
				is_authenticated: true,
			};
		case "LOGIN_FAILURE":
			return {
				...state,
				is_authenticated: false,
			};
		case "ADD_PROFILE":
			return {
				...state,
				profile: action.payload,
			};
		case "REMOVE_PROFILE":
			return {
				...state,
				profile: null,
			};
		default:
			return state;
	}
};
