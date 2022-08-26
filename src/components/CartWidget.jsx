import React, { useState } from "react";
import styled from "styled-components";

function CartWidget({ value, stock, itemCount }) {
  const price = value;

  const [itemState, setItemState] = useState(true);
  const displayItems = () => {
    setItemState(!itemState);
    console.log(itemState);
  };
  return (
    <CartButton>
      <div className="cart-circle">
        <a onClick={displayItems}>
          Carrito = <i class="bx bx-cart"></i> {itemCount}
        </a>
      </div>

      <div className={`item-list ${itemState ? "inactive" : ""}`}>
        <ul>
          <li className="icon-cart">
            <i class="bx bx-cart"></i>
          </li>
          <li className="items" id="items">
            <div className="item-container1">
              {itemCount}x Sneakers ${price * itemCount}
            </div>
            <div className="item-container2">
              <i class="bx bx-minus"></i>
              <i class="bx bx-plus"></i>
            </div>
          </li>
          <li className="subtotal">
            Subtotal: <div>${price * itemCount}</div>
          </li>
        </ul>
      </div>
    </CartButton>
  );
}

export default CartWidget;

const CartButton = styled.div`
  .cart-circle {
    position: fixed;
    right: 50px;
    bottom: 50px;
    transition: all 2ms ease-in;
    a {
      cursor: pointer;
      text-decoration: none;
      background: #757575;
      transform: tranlate(-50%, -50%);
      color: #000;
      padding: 10px;
      border-radius: 40px;
      font-size: 16px;
    }
  }
  .item-list {
    color: #000;
    transition: all 2ms ease-in;
    ul {
      display: flex;
      flex-direction: column;
      padding: 10px;
      background: #757575;
      position: fixed;
      right: 50px;
      bottom: 90px;
      list-style: none;
      border-radius: 10px;
      transition: all 2ms ease-in;
      #items {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 220px;
        font-size: 14px;
        margin-bottom: 10px;
        .item-container1 {
          display: flex;
          justify-content: space-between;
          i {
            text-decoration: none;
            color: #000;
          }
        }
        .item-container2 {
          text-align: right;
        }
      }
      .icon-cart {
        font-size: 25px;
        text-align: center;
        margin-bottom: 10px;
      }
      .subtotal {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 220px;
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
  }
  .inactive {
    display: none;
    transition: all 2ms ease-in;
  }
`;
