import React, { useState } from 'react'
import axios from 'axios'
import {Card, Container, Row,Button, Col} from 'react-bootstrap'
import {useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux' 


function Cart() {
    const cartItems = useSelector((state) => state.shop.cart.products);
const  [totalcost,setTotalCost]= useState('')
   console.log("cart",cartItems)
   const setTotal= async()=>{
    const res= await axios.get(`http://localhost:8080/gettotal/cart/${encodeURI(localStorage.getItem('userId'))}`) 
    setTotalCost(res.data);
   }
   useEffect(() => {
    
     setTotal();
   }, [])

    return (
        <Container>
        <Row xs={1} md={3} className="g-4">
        {cartItems.length &&
          cartItems.map((med) => (
            <Col key={med.medicineId}>
              <Card>
                <Card.Body>
                    {" "}
                    <Card.Title><Link to="/medicinedescription" style={{textDecoration:"none"}}>{med.medicineName}</Link></Card.Title>
                    <Card.Text>Rs.{med.medicineCost}</Card.Text>
                    <Card.Text>qty:{med.medicineQuantity}</Card.Text>
                  <Button variant="secondary">delete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      {totalcost}
      <Button as={Link} to="/order" >checkout</Button>
    </Container>
    )
}

export default Cart
