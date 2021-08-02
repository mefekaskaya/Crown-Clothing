import { actionTypes } from "../../types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case actionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case actionTypes.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
