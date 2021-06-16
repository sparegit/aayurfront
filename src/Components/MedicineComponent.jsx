import React from "react";
import { Carousel, Card, Container, Row, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../actions/product_Actions";
import { setCart } from "../actions/shopping_actions";
import { connect } from "react-redux";
import { addToCart } from "../actions/shopping_actions";
import Footer from "./footer";
const { useEffect, useState } = React;

const axios = require("axios");
let id = localStorage.getItem("userId");
function MedicineComponent({ addToCart }) {
  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  const getCartItems = async () => {
    let id = localStorage.getItem("userId");
    console.log("userid", id);
    const res = await axios.get(
      `http://localhost:8080/getproducts/cart/${encodeURI(id)}`
    );
    console.log("cart res", res);

    dispatch(setCart(res.data));
  };
  const handleAdd = async(medid) => {
    if (medid === null) {
      alert("login");
    } else {
      console.log("med", medid);
      addToCart(medid, id);
      getCartItems();
    }
  };

  /*const getMedList = async () => {
    const { data } = await axios.get("http://localhost:8082/medicine/");

    dispatch(setProducts(data));
  };*/

  useEffect(() => {
    getCartItems();
  }, []);
  console.log(products);
  return (
    <div>
      <Container style={{ marginTop: "51px" }}>
        <Carousel fade>
          <Carousel.Item>
            <img src="med2.jpg" alt="First slide" width="100%" height="500px" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="med4.jpg"
              alt="Second slide"
              width="100%"
              height="500px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img src="med3.jpg" alt="Third slide" width="100%" height="500px" />
          </Carousel.Item>
        </Carousel>
        <div
          className="text-danger"
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          <h1>India's Largest Ayurvedic Medicines Online Store</h1>
          <h6 className="text-secondary">
            We are an Online Market of ayurvedic medicines. Visit our site for a
            complete list of exclusive stocks.
          </h6>
        </div>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner" style={{ marginTop: "70px" }}>
            <div class="carousel-item active">
              <img
                src="med5.jpg"
                alt="First slide"
                width="100%"
                height="200px"
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h2
            className="text-dark"
            style={{ fontWeight: "bold", fontSize: "45px" }}
          >
            Our Medicines
          </h2>
        </div>
        <Row xs={1} md={3} className="g-4" style={{ marginTop: "20px" }}>
          {products.length &&
            products.map((med) => (
              <Col key={med.medicineId}>
                <Card style={{height:"320px",width:"300px"}}>
                  <Card.Body>
                    {" "}
                    <Card.Title style={{fontWeight:"bold",fontSize:"30px"}}>
                      <Link
                        to={`medicine/${med.medicineId}`}
                        style={{ textDecoration: "none" }}>
                        {med.medicineName}
                      </Link>
                    </Card.Title>
                    <img width="100rem" src={med.medicineImage} />
                    <div style={{fontWeight:"bold",fontSize:"25px"}}>
                    <Card.Text>Rs.{med.medicineCost}</Card.Text></div>
                    <div style={{marginTop:"10px"}}>
                    <Button
                      onClick={() => handleAdd(med.medicineId)}
                      variant="warning"
                    >
                      Add to Cart
                    </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps, { addToCart })(MedicineComponent);
