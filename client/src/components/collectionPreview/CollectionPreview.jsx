import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import CollectionItem from "../collectionItem/CollectionItem";
import "./CollectionPreview.scss";

export default function CollectionPreview({ title, items, routeName }) {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
