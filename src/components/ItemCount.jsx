import React, { useState } from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";

function ItemCount() {
  const [itemCount, setItemCount] = useState(0);
  const image1 =
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/689bf39a-6e96-4a55-adbc-0cbc8fe387d5/air-jordan-1-mid-zapatillas-XrWJMF.png";
  const price1 = 100;

  const itemCliked = () => {
    setItemCount(itemCount + 1);
    if (itemCount === 10) {
      alert("You can't add more than 10 items");
      setItemCount(10);
    }
  };

  const itemClicked2 = () => {
    setItemCount(itemCount - 1);
    if (itemCount === 0) {
      alert("You can't remove more than 0 items");
      setItemCount(0);
    }
  };

  return (
    <CartItemsContainer value={itemCount}>
      <div>
        <div className="image-card-items">
          <img src={image1}></img>
        </div>
        <div className="text-card-items">
          <p>Jordan 1</p>
          <p>${price1}</p>
        </div>
        <div className="button-card-items">
          <button inputMode="none" onClick={itemCliked}>
            Añadir al carrito <i class="bx bx-plus"></i>
          </button>
          <button inputMode="none" onClick={itemClicked2}>
            Eliminar del carrito <i class="bx bx-minus"></i>
          </button>
        </div>
      </div>
      <CartWidget
        funcion={itemCliked}
        funcion2={itemClicked2}
        value={price1}
        stock={true}
        itemCount={itemCount}
      />
    </CartItemsContainer>
  );
}

export default ItemCount;

const CartItemsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  margin-right: 20px;
  .image-card-items {
    img {
      width: 300px;
    }
  }
  .text-card-items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    p {
      font-size: 16px;
      font-weight: 500;
    }
  }
  .button-card-items {
    button {
      cursor: pointer;
      font-size: 14px;
      background: #757575;
      color: #000;
      padding: 10px 20px;
      border-radius: 20px;
    }
  }
`;
