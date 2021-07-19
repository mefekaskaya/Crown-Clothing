import { actionTypes } from "../types";

export const updateCollections = (collectionsMap) => ({
  type: actionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
