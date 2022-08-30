import React from "react";

export const Item = ({ item }) => {
  return (
    <>
        <a href=" " className="item">
          <img src={item.image} alt="" />
          <p>{item.name}</p>
        </a>
    </>
  );
};
