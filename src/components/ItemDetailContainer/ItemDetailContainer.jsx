import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { ItemCount } from "../ItemCount/ItemCount";

const AddToCart = (count) => {
  console.log(`Has añadido: ${count} productos`);
};

const item = {
  id: 1,
  image: "./assets/Jordan1Black.jpg",
  name: "Nike Air Max 97",
  desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae, voluptatum, quod, voluptas quibusdam voluptates quidem voluptatibus quos quia quas nesciunt. Quisquam, quae.",
  price: "$100",
  counter: <ItemCount stock={10} addToCart={AddToCart} min={1} sum={1} res={1} />
};

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(item);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);

  return <ItemDetail data={data} />;
};
