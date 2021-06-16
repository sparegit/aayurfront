import React from "react";
import axios from "axios";
import {
  CardColumns,
  Image,
  Carousel,
  Card,
  Container,
  Row,
  Button,
  Col,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addToCart } from "../actions/shopping_actions";
const { useEffect, useState } = React;
function SingleMed() {
  const { medicineId } = useParams();
  const [med, setmed] = useState({});
  const fetchMedDetail = async () => {
    const res = await axios
      .get(`http://localhost:8080/medicine/id/${medicineId}`)
      .then((res) => {
        console.log("response of single", res);
        setmed(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchMedDetail();
  }, []);
  console.log(med.medicineName);
  return (
    <Container style={{ marginTop: "51px"}}>
      <Row xs={1} md={3} className="g-4">
        <Col key={med.medicineId}>
          <Card style={{ border: "1px solid" }}>
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold", fontSize: "30px" }}>
                {med.medicineName}
              </Card.Title>
              <img width="390px" src={med.medicineImage} />
              <div style={{ fontWeight: "bold", fontSize: "25px" }}>
                <Card.Text>Rs.{med.medicineCost}</Card.Text>
              </div>
              <Card.Text>{med.medicineDescription}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div
        className="four wide column"
        style={{ marginTop: "51px", flexDirection: "row" }}
      >
        <div className="ui link cards">
          <div className="card">
            <div className="content">
              <img
                src="https://images.financialexpress.com/2020/09/ayurveda-l-pti-1200.jpeg"
                alt="hai"
                width="100%"
                height="250px"
              />
            </div>
          </div>
          <div className="ui link cards" style={{ marginLeft: "10px" }}>
            <div className="card">
              <div className="content">
                <img
                  src="https://wallpaperaccess.com/full/2680927.jpg"
                  alt="hai"
                  className="rounded"
                  width="100%"
                  height="270px"
                />
              </div>
            </div>
          </div>
          <div className="ui link cards" style={{ marginLeft: "10px" }}>
            <div className="card">
              <div className="content">
                <img
                  src="https://static2.bigstockphoto.com/7/3/2/large1500/237034081.jpg"
                  alt="hai"
                  className="rounded"
                  width="100%"
                  height="270px"
                />
              </div>
            </div>
          </div>
          <div className="ui link cards" style={{ marginLeft: "10px" }}>
            <div className="card">
              <div className="content">
                <img
                  src="https://i.pinimg.com/originals/7d/92/4c/7d924cc4489932afa59b881fc9f2a523.jpg"
                  alt="hai"
                  className="rounded"
                  width="100%"
                  height="270px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SingleMed;
/* <div style={{ width: 660, height: "auto" }}></div>
      <CardColumns style={{ marginTop: "51px" }}>
        <Card style={{ width: "18rem", height: "15rem" }}>
          <img
            src="med2.jpg"
            alt="hai"
          />*/

/* <div>
      <Card>
        <Card.Body>
          {" "}
          <Card.Title>
            <Link style={{ textDecoration: "none" }}>{med.medicineName}</Link>
          </Card.Title>
          <Card.Text>Rs.{med.medicineCost}</Card.Text>
          <Card.Text>{med.medicineDescription}</Card.Text>
        </Card.Body>
      </Card>
    </div>*/
