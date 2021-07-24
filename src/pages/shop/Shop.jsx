import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import CollectionOverviewContainer from "../../components/collectionOverview/CollectionOverviewContainer";
import CollectionContainer from "../collection/CollectionContainer";

import { fetchCollectionsStartAsync } from "../../redux/actions/shop";

export default function ShopPage({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
}
