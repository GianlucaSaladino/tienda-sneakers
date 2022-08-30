import React, { useEffect, useState } from "react";

export const ItemCount = ({ stock, addToCart, min, sum, res }) => {
  const [count, setCount] = useState(parseInt(min));

  const add = () => {
    if (count < stock) {
      setCount(count + sum);
    }
  };

  const substract = () => {
    if (count >= min) {
      setCount(count - res);
    }
  };

  const reset = () => {
    setCount(min);
  };

  useEffect(() => {
    setCount(parseInt(min));
  }, [min]);

  return (
    <div>
      <div className="counter-box">
        <p>Stock: {stock} </p>
        <p>Cantidad: {count} </p>

        <div>
          <button className="btn" onClick={substract}>
            -
          </button>
          <button className="btn" onClick={reset}>
            Reset
          </button>
          <button className="btn" onClick={add}>
            +
          </button>
        </div>
        <div>
          <button className="btn" onClick={() => addToCart(count)}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};