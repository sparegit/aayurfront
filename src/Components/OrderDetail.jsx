import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { Row, Col,Card,Container } from "react-bootstrap";
function OrderDetail() {
    const[orders,setOrders]=useState([]);
    const getOrder= ()=>{
        const res= axios.get(`http://localhost:8080/orders/list/cust/${encodeURI(localStorage.getItem('userId'))}`)
        .then(res=>{
            console.log(res)
            setOrders(res.data)
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(() => {
        getOrder();
    }, [])
    return (
        <div>
            <Container>
      <Row xs={1} md={3} className="g-4">
        {orders.length &&
          orders.map((order) => (
            <Col key={order.orderId}>
              <Card>
                <Card.Body>
                  {" "}
                  <Card.Title>
                    <Link
                      style={{ textDecoration: "none" }}
                    >
                      OrderId:{order.orderId}
                    </Link>
                  </Card.Title>
                  <Card.Text>ordered Date:{order.orderDate}</Card.Text>
                  <Card.Text>dispatch Date:{order.dispatchDate}</Card.Text>
                  <Card.Text>Rs.{order.totalCost}</Card.Text>
                  <Card.Text>Status:{order.status}</Card.Text>
                  <Card.Text>Address:{order.location}</Card.Text>
                  <Card.Text>PaymentType:{order.paymentType}</Card.Text>
                
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
        </div>
    )
}

export default OrderDetail
