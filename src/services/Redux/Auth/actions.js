import * as actionTypes from "./actionTypes";

//login
export const loginStartedAction = () => ({
  type: actionTypes.LOGIN_STARTED,
});

export const loginSuccessAction = () => ({
  type: actionTypes.LOGIN_SUCCESS,
});

export const loginFailction = () => ({
  type: actionTypes.LOGIN_FAIL,
});

//logout
export const logoutStartedAction = () => ({
  type: actionTypes.LOGOUT_STARTED,
});

export const logoutSuccessAction = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

export const logoutFailction = () => ({
  type: actionTypes.LOGOUT_FAIL,
});
