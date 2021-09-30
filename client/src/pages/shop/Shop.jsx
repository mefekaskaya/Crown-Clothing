import React, { lazy, useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import Spinner from "../../components/spinner/Spinner";

import { fetchCollectionsStartAsync } from "../../redux/actions/shop";

const CollectionOverviewContainer = lazy(() => import ('../../components/collectionOverview/CollectionOverviewContainer'));
const CollectionContainer = lazy(() => import ('../collection/CollectionContainer'));

export default function ShopPage({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);
  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  );
}
