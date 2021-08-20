import { actionTypes } from '../../types';
import { addItemToCart, removeItemFromCart } from '../../../utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.TOGGLE_CART_HIDDEN:
    return {
      ...state,
      hidden: !state.hidden,
    };
  case actionTypes.ADD_ITEM:
    return {
      ...state,
      cartItems: addItemToCart(state.cartItems, action.payload),
    };
  case actionTypes.REMOVE_ITEM:
    return {
      ...state,
      cartItems: removeItemFromCart(state.cartItems, action.payload),
    };
  case actionTypes.CLEAR_ITEM_FROM_CART:
    return {
      ...state,
      cartItems: state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      ),
    };
  case actionTypes.CLEAR_CART:
    return {
      ...state,
      cartItems: []
    };
  case actionTypes.SET_CART_FROM_FIREBASE:
    return {
      ...state,
      cartItems: action.payload
    };
  default:
    return state;
  }
};

export default cartReducer;
