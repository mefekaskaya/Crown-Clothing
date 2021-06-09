import React from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../customButton/CustomButton";
import { addItem } from "../../redux/actions/cart";
import "./CollectionItem.scss";

export default function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
}
