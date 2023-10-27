import React, { useContext } from "react";
import Data from "./components/Data"; // Correct the import

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "./Context";

const Home = () => {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="products">
      {Data.productItems.map(
        (
          product // Use Data.productItems correctly
        ) => (
          <div key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className="card-img"
                src={product.image}
                alt="product-image"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text style={{ color: "red", fontWeight: "bold" }}>
                  Price:{product.price}
                </Card.Text>

                <Button
                  className="cart-button"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        )
      )}
    </div>
  );
};

export default Home;
