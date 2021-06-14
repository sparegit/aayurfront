import React, { useState } from 'react'
import axios from 'axios'
import {Card, Container, Row,Button, Col} from 'react-bootstrap'
import {useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux' 
import { setCart } from '../actions/shopping_actions';


function Cart() {
  const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.shop.cart);
const  [totalcost,setTotalCost]= useState('')
const [cart,setCarti]= useState([]);
   console.log("cart",cartItems)
   const setTotal= async()=>{
    const res= await axios.get(`http://localhost:8080/gettotal/cart/${encodeURI(localStorage.getItem('userId'))}`) 
    setTotalCost(res.data);
   }
   const getCartItems = async () => {
    let id = localStorage.getItem('userId');
    console.log("userid",id)
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
   }, [])
  
   if (cartItems) {
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
   return (<h1>
     your basket is empty
   </h1>);
 }
   


export default Cart
