import * as actions from "./actions";

export const login = (credentials) => {
  try {
    const { firstName, lastName, email, rememberMe } = credentials;
    actions.loginStartedAction();
    if (rememberMe) {
      localStorage.setItem(
        "user",
        JSON.stringify({ firstName, lastName, email })
      );
    } else {
      sessionStorage.setItem(
        "user",
        JSON.stringify({ firstName, lastName, email })
      );
    }
    actions.loginSuccessAction();
  } catch (err) {
    actions.loginFailction();
  }
};

export const logout = () => {
  try {
    actions.logoutStartedAction();
    localStorage.clear();
    sessionStorage.clear();
    actions.logoutSuccessAction();
  } catch (err) {
    actions.logoutFailction();
  }
};
