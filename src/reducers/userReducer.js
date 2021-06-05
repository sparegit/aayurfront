import { actionTypes } from "../services/userTypes";
const INITIAL_STATE = {
  user: null,
  loggedIn: false,
};
const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGIN:
    case actionTypes.USER_REGISTER:
    console.log("payload",payload)
    localStorage.setItem('email',payload.email)
      return { ...state, user: payload, loggedIn: true };
    case actionTypes.USER_LOGOUT:
      localStorage.removeItem('email')
      return { ...state, user: null, loggedIn: false };
      case actionTypes.LOAD_USER:
        localStorage.getItem('email')
        return { ...state, user: payload, loggedIn: true };
    case actionTypes.LOGIN_FAIL:
    case actionTypes.USER_REGISTER_FAIL:
      localStorage.removeItem('email')
      return { ...state, user: null, loggedIn: false };
    default:
      return state;
  }
};
export default userReducer;
