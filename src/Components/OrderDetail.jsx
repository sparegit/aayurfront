import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Container,B } from "react-bootstrap";
function OrderDetail() {
  const [orders, setOrders] = useState([]);
  const getOrder = () => {
    const res = axios
      .get(
        `http://localhost:8080/orders/list/cust/${encodeURI(
          localStorage.getItem("userId")
        )}`
      )
      .then((res) => {
        console.log(res);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <div style={{marginTop:"50px"}}>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {orders.length &&
            orders.map((order) => (
              <Col key={order.orderId}>
                <Card>
                  <Card.Body>
                    {" "}
                    <Card.Title>
                      <Link style={{ textDecoration: "none" }}>
                        OrderId:{order.orderId}
                      </Link>
                    </Card.Title>
                    <Card.Text ><h3>ordered Date:</h3>{order.orderDate}</Card.Text>
                    <Card.Text><h3>dispatch Date:</h3>{order.dispatchDate}</Card.Text>
                    <h3><div>
                    <Card.Text> 
                      Rs.{order.totalCost}</Card.Text></div></h3>
                    <Card.Text><h3>Status:</h3>{order.status}</Card.Text>
                    <Card.Text><h3>Address:</h3>{order.location}</Card.Text>
                    <Card.Text><h3>PaymentType:</h3>{order.paymentType}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default OrderDetail;
