import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collectionOverview/CollectionOverview";
import Collection from "../collection/Collection";
import WithSpinner from "../../components/withSpinner/WithSpinner";
import { updateCollections } from "../../redux/actions/shop";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

export default function ShopPage({ match }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.get().then(async (snapshot) => {
      const collectionsMap = await convertCollectionSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
      setLoading(false);
    });
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
}
