import React from "react";
import {useState,useEffect} from 'react'
import {  useHistory } from "react-router";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";


function Order() {
  const history= useHistory();
  const  [totalcost,setTotalCost]= useState('')
  const setTotal= async()=>{
    const res= await axios.get(`http://localhost:8080/gettotal/cart/${encodeURI(localStorage.getItem('userId'))}`) 
    setTotalCost(res.data);
   }
   useEffect(() => {
    
     setTotal();
   }, [])


      const[address, setAddress]= useState({
        location:"",
        city:"",
        zip:"",
      })
    

     
const handleSubmit=(e)=>{
e.preventDefault();
console.log(address);
const res = axios.post(`http://localhost:8080/order/${encodeURI(localStorage.getItem('userId'))}`,address)
.then(res=>{
  if(res.data.status==="Placed"){
    history.push("/orderDetails");
  }
  console.log(res)
}).catch(err=>{
  console.log(err);
})
console.log(res);
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
        <h6>Shipping fee Rs.{50}</h6>
                <h6>payment:cash on delivery</h6>
       <h5>total cost for your order Rs.{totalcost+50}
       </h5>

        <Button  variant="primary" type="submit">
          place your Order
        </Button>
      </Form>
      
    </div>
  );
}

export default Order;
