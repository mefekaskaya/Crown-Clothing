import { all, call } from 'redux-saga/effects';

import { userSagas } from './sagas/user.js';
import { cartSagas } from './sagas/cart.js';

export default function* rootSaga() {
    yield all([call(userSagas), call(cartSagas)]);
}