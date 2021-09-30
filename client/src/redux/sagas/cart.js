import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import { actionTypes } from '../types';
import { clearCart, setCartFromFirebase } from '../actions/cart';
import { selectCurrentUser } from '../selectors/user';
import { getUserCart } from '../../firebase/firebase.utils';
import { selectCartItems } from '../selectors/cart';

export function* clearCartOnLogout() {
  yield put(clearCart());
}

export function* onLogoutSuccess() {
  yield takeLatest(actionTypes.LOGOUT_SUCCESS, clearCartOnLogout);
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  try {
    if(currentUser) {
      const cartRef = yield getUserCart(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    }
  } catch (error) {
    console.log(error);
  } 
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCart(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onUserLogin() {
  yield takeLatest(actionTypes.LOGIN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest([
    actionTypes.ADD_ITEM,
    actionTypes.REMOVE_ITEM,
    actionTypes.CLEAR_ITEM_FROM_CART
  ],
  updateCartInFirebase);
}

export function* cartSagas() {
  yield all([call(onLogoutSuccess), call(onCartChange), call(onUserLogin)]);
}