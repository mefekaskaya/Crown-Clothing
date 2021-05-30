import { combineReducers } from "redux";
import userReducer from "./reducers/user";
import cartReducer from "./reducers/cart";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
