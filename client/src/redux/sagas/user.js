import { takeLatest, put, all, call } from 'redux-saga/effects';

import { actionTypes } from '../types';

import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  registerSuccess,
  registerFailure
} from '../actions/user.js';

import {
  auth,
  provider,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils.js';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(loginSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    console.log(error.message)
    yield put(loginFailure(error));
  }
}

export function* loginWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* loginWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* logout() {
  try {
    yield auth.signOut();
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

export function* register({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(registerSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(registerFailure(error));
  }
}

export function* loginAfterRegister({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleLoginStart() {
  yield takeLatest(actionTypes.GOOGLE_LOGIN_START, loginWithGoogle);
}

export function* onEmailLoginStart() {
  yield takeLatest(actionTypes.EMAIL_LOGIN_START, loginWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(actionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onLogoutStart() {
  yield takeLatest(actionTypes.LOGOUT_START, logout);
}

export function* onRegisterStart() {
  yield takeLatest(actionTypes.REGISTER_START, register);
}

export function* onRegisterSuccess() {
  yield takeLatest(actionTypes.REGISTER_SUCCESS, loginAfterRegister);
}

export function* userSagas() {
  yield all([
    call(onGoogleLoginStart),
    call(onEmailLoginStart),
    call(onCheckUserSession),
    call(onLogoutStart),
    call(onRegisterStart),
    call(onRegisterSuccess)
  ]);
}