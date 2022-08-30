import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

const item = {
  id: 1,
  image: "./assets/Jordan1Black.jpg",
  name: "Nike Air Max 97",
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
