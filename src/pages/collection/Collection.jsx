import React from "react";
import { useSelector } from "react-redux";

import CollectionItem from "../../components/collectionItem/CollectionItem";
import { selectCollection } from "../../redux/selectors/shop";

import "./Collection.scss";

export default function Collection({ match }) {
  const collection = useSelector(selectCollection(match.params.collectionId));
  const { title, items } = collection;
  return (
    <div className="collection">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
