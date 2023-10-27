import React, { useContext, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "./Context";

const Shopcart = () => {
  const { cartItems, dispatch } = useContext(CartContext);
  const [count, setCount] = useState(1); // Initialize the count with 1

  const handleRemoveFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const handleIncrement = (product) => {
    setCount(count + 1);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const handleDecrement = (product) => {
    if (count === 1) {
      // If the count is 1, remove the item from the cart
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
    } else {
      // Otherwise, decrement the count
      setCount(count - 1);
      dispatch({ type: "DECREMENT_QUANTITY", payload: product });
    }
  };

  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img src={item.image} alt="product-image" />
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>
                {item.name}
              </Card.Title>

              <Card.Text className="cart" style={{ fontSize: "medium" }}>
                Select Quantity:
                <div className="cartitem-qty ">
                  <Button
                    className="quantity-button"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </Button>
                  <div className="quantity-div">{count}</div>
                  <Button
                    className="quantity-button"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </Button>
                </div>
                <p style={{ color: "red" }}>
                  Price:
                  <span style={{ fontWeight: "bold" }}>{item.price}</span>
                </p>
              </Card.Text>
              <Button
                className="cart-button"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Shopcart;
