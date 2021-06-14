import React from "react";
import {useState,useEffect} from 'react'
import { MDBContainer, MDBInput } from "mdbreact";

import { Form, Row, Col, Button } from "react-bootstrap";


function Order() {
 

    const [orderDetails, setOrderDetails] = useState({
        customerId:localStorage.getItem('userId'),
       
        payment:{},
       Address:{},
        errors:{}
      });
      const[address, setAddress]= useState({
        location:"",
        city:"",
        zip:"",
      })
    

      // const [credentials, setCredentials] = useState({
      //   email:"",
      //   password:"",
      //   mobileNumber:"",
      //   errors:{}
      // });
const handleSubmit=(e)=>{
e.preventDefault();

console.log(orderDetails);
}


 

  return (
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
                }/>
        </Form.Group>
        <Row xs="auto" className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control  onChange={(e) =>
                setAddress({ ...address, city: e.target.value })
                } />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control onChange={(e) =>
                setAddress({ ...address, zip: e.target.value })
                } />
          </Form.Group>
        </Row>
      
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
    </div>
  );
}

export default Order;
