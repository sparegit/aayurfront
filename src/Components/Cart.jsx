import React, { useState } from "react";
import axios from "axios";
import { Card, Container, Row, Button, Col } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import { setCart } from "../actions/shopping_actions";

import { removeFromCart } from "../actions/shopping_actions";

function Cart({ removeFromCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shop.cart);
  const [totalcost, setTotalCost] = useState("");
  const [cart, setCarti] = useState([]);
  console.log("cart", cartItems);
  const setTotal = async () => {
    const res = await axios.get(
      `http://localhost:8080/gettotal/cart/${encodeURI(
        localStorage.getItem("userId")
      )}`
    );
    setTotalCost(res.data);
  };
  const getCartItems = async () => {
    let id = localStorage.getItem("userId");
    console.log("userid", id);
    const res = await axios.get(
      `http://localhost:8080/getproducts/cart/${encodeURI(id)}`
    );
    setCarti(res.data);
    console.log("cart res", res);

    dispatch(setCart(res.data));
  };
  useEffect(() => {
    getCartItems();
    setTotal();
  }, [totalcost]);

  if (cart.length !== 0) {
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "170px",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <Row xs={1} md={3} className="g-4">
          {cartItems.length &&
            cartItems.map((med) => (
              <Col style={{ marginLeft: "100px" }} key={med.medicineId}>
                <Card style={{ width: "18rem", border: "2px solid" }}>
                  <Card.Body>
                    {" "}
                    <Card.Title>
                      <Link
                        to="/medicinedescription"
                        style={{ textDecoration: "none" }}
                      >
                        {med.medicineName}
                      </Link>
                    </Card.Title>
                    <Card.Text>Rs.{med.medicineCost}</Card.Text>
                    <Card.Text>qty:{med.medicineQuantity}</Card.Text>
                    <i
                      class="fas fa-trash"
                      onClick={() => {
                        removeFromCart(
                          med.medicineId,
                          localStorage.getItem("userId")
                        );
                        setTotal();
                      }}
                      variant="secondary"
                    ></i>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>

        <Card
          style={{
            width: "18rem",
            marginLeft: "170px",
            margin: "auto",
            marginTop: "50px",
            border: "2px solid",
          }}
        >
          <Card.Body>
            <Card.Text>
              <h1>Cart Summary</h1>
            </Card.Text>
            <Card.Text> Total Cost of My Cart Rs.{totalcost}</Card.Text>
            <Card.Text>
              <h6>Shipping fee Rs.{50}</h6>

              <h5>total cost for your order Rs.{totalcost + 50}</h5>
            </Card.Text>
            <Button as={Link} to="/order">
              checkout
            </Button>
          </Card.Body>
        </Card>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Container>
    );
  }
  return <h1 style={{ textAlign: "center" }}>your basket is empty</h1>;
}

const mapStateToProps = (state) => {
  return {
    shop: state.shop.cart,
    loggedIn: state.user.loggedIn,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);
