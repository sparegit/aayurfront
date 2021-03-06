import React from "react";
import { useState, useEffect } from "react";
import { MDBContainer, MDBInput } from "mdbreact";
import { useHistory } from "react-router";
import axios from "axios";
import {Carousel,Card, Form, Row, Col, Button } from "react-bootstrap";

function Order() {
  const history = useHistory();
  const [totalcost, setTotalCost] = useState("");
  const setTotal = async () => {
    const res = await axios.get(
      `http://localhost:8080/gettotal/cart/${encodeURI(
        localStorage.getItem("userId")
      )}`
    );
    setTotalCost(res.data);
  };
  useEffect(() => {
    setTotal();
  }, []);

  // const [orderDetails, setOrderDetails] = useState({
  //     customerId:localStorage.getItem('userId'),

  //    Address:{},
  //     errors:{}
  //   });
  const [address, setAddress] = useState({
    location: "",
    city: "",
    zip: "",
  });

  // const [credentials, setCredentials] = useState({
  //   email:"",
  //   password:"",
  //   mobileNumber:"",
  //   errors:{}
  // });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(address);
    const res = axios
      .post(
        `http://localhost:8080/order/${encodeURI(
          localStorage.getItem("userId")
        )}`,
        address
      )
      .then((res) => {
        if (res.data.status === "Placed") {
          history.push("/orderDetails");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(res);
  };

  return (
    <div style={{}}>
    <Card border="dark" style={{border:"1px solid" ,display:"block",width:"600px", height: "400px",margin: "auto", marginTop: "30px"}}>
    <div style={{ width: "480px", margin: "auto", marginTop: "50px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            size="lg"
            style={{ width: "425px" }}
            placeholder="Apartment, studio, or floor"
            onChange={(e) =>
              setAddress({ ...address, location: e.target.value })
            }
          />
        </Form.Group>
        <Row xs="auto" className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              onChange={(e) => setAddress({ ...address, zip: e.target.value })}
            />
          </Form.Group>
        </Row>
        <div>
        <Form.Group as={Row}>
      
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Cash On Delivery"
          name="formHorizontalRadios" defaultChecked
          id="formHorizontalRadios1"
        />
        </Col>
        </Form.Group>

        </div>
        

        <h5 style={{marginTop:"10px"}}>Total cost for your order Rs.{totalcost + 50}</h5>
        <Button variant="primary" type="submit">
          place your Order
        </Button>
      </Form>
    </div>
    </Card>
    <div style={{marginTop:"50px"}}>
    <Carousel>
    <Carousel.Item>
      <img
        src="med6.jpg"
        alt="First slide"
        width="100%"
        height="500px"

      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="med7.jpg"
        alt="Second slide"
        width="100%"
        height="500px"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="med8.jpg"
        alt="Third slide"
        width="100%"
        height="500px"
      />
    </Carousel.Item>
  </Carousel>
    </div>
    </div>
    
  );
}

export default Order;
