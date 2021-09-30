import { actionTypes } from "../types";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: actionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFail = (error) => ({
  type: actionTypes.FETCH_COLLECTIONS_FAIL,
  payload: error,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(async (snapshot) => {
        const collectionsMap = await convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFail(error.message));
      });
  };
};
