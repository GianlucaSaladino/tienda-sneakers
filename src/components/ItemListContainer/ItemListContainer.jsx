import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";

const sneakers = [
  {
    id: 1,
    image: "./assets/Jordan1Black.jpg",
    name: "Nike Jordan 1 Black",
  },
  {
    id: 2,
    image: "./assets/Jordan1Blue.webp",
    name: "Nike Jordan 1 Blue",
  },
  {
    id: 3,
    image: "./assets/Jordan1Red.jpg",
    name: "Nike Jordan 1 Red",
  },
];

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(sneakers);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);

  const AddToCart = (count) => {
    console.log(`Has añadido: ${count} productos`);
  };

  return (
    <>
      <ItemCount stock={10} addToCart={AddToCart} min={1} sum={1} res={1} />
      <ItemList data={data} />
    </>
  );
};
