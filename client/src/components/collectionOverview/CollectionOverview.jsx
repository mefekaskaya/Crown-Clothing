import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionsPreview } from "../../redux/selectors/shop";
import CollectionPreview from "../collectionPreview/CollectionPreview";

import "./CollectionOverview.scss";

export default function CollectionOverview() {
  const shopItems = useSelector(selectCollectionsPreview);

  return (
    <div className="collections-overview">
      {shopItems.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}
