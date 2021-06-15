import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { Row, Col,Card,Container } from "react-bootstrap";
function AdminViewOrders() {
    const isAdmin = useSelector((state) => state.user.isAdmin);
    const [orders, setOrders] = useState([])
    const getAllOrders=()=>{
        const res= axios.get("http://localhost:8080/orders").then(resp=>{
            setOrders(resp.data);
        })
        res.then(console.log(res)).catch(err=>{
            console.error(err)
        })
    
    }
    useEffect(() => {
       getAllOrders();
    }, [])
    if(isAdmin){
        if(orders){
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
        return(
            <div>
                <h1>
                    no orders available
                </h1>
            </div>
        )
       
    }
    return(
        <div>
            <h1>
                access denied
            </h1>
        </div>
    )
   
}

export default AdminViewOrders
