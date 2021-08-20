import { actionTypes } from '../types';

export const toggleCartHidden = () => ({
  type: actionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: actionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: actionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART
});

export const setCartFromFirebase = cartItems => ({
  type: actionTypes.SET_CART_FROM_FIREBASE,
  payload: cartItems
});

export const updateCartInFirebase = () => ({
  type: actionTypes.UPDATE_CART_IN_FIREBASE,
});