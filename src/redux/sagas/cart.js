import { all, call, takeLatest, put } from 'redux-saga/effects';

import { actionTypes } from '../types';
import { clearCart } from '../actions/cart';

export function* clearCartOnLogout() {
  yield put(clearCart());
}

export function* onLogoutSuccess() {
  yield takeLatest(actionTypes.LOGOUT_SUCCESS, clearCartOnLogout);
}

export function* cartSagas() {
  yield all([call(onLogoutSuccess)]);
}