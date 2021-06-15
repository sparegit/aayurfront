import React from 'react'
import { Card, Container, Row, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../actions/product_Actions";
import { setCart } from "../actions/shopping_actions";
import { connect } from "react-redux";
import { addToCart } from "../actions/shopping_actions";
const { useEffect,useState } = React;


const axios = require("axios");
let id = localStorage.getItem('userId');
function MedicineComponent({addToCart}) {
    const products = useSelector((state) => state.product.products);
    const [search, setSearch] = useState('');
    const [filtered, setFiltered] = useState([]);

   
  const dispatch = useDispatch();

  const getCartItems = async () => {
    let id = localStorage.getItem('userId');
    console.log("userid",id)
    const res = await axios.get(
      `http://localhost:8080/getproducts/cart/${encodeURI(id)}`
    );
    console.log("cart res", res);

    dispatch(setCart(res.data));
  };
  // const handleAdd = (medid) => {
  //   if (medid === null) {
  //     alert("login");
  //   } else {
  //     console.log("med",medid)
  //     addToCart(medid,id);
  //     getCartItems();
  //   }
  // };
  console.log(search)

//   const getMedList = async () => {
//     const { data } = await axios.get("http://localhost:8080/medicine/");

//     dispatch(setProducts(data));
//   };

  useEffect(() => {
    getCartItems();
    products.filter(med=>{
        if(med.medicineName.toLowerCase().includes(search.toLowerCase())){
            setFiltered([...filtered,med])
        }
    })
    // getCartItems();
  }, [search]);
  console.log(products);
    return (
        <div>
            <div>
                <input type="text" onChange={e=>setSearch(e.target.value)}>
                </input>
            </div>
             <Container>
      <Row xs={1} md={3} className="g-4">
        {products.length &&
          filtered.map((med) => (
            <Col key={med.medicineId}>
              <Card>
                <Card.Body>
                  {" "}
                  <Card.Title>
                    <Link
                      to={`medicine/${med.medicineId}`}
                      style={{ textDecoration: "none" }}
                    >
                      {med.medicineName}
                    </Link>
                  </Card.Title>
                  <Card.Text>Rs.{med.medicineCost}</Card.Text>
                  {/* <Card.Text>{med.medicineDescription}</Card.Text> */}
                  <Button onClick={()=> {addToCart(med.medicineId,id);getCartItems()}} variant="primary">
                    AddToCart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };

export default connect(mapStateToProps,{ addToCart })(MedicineComponent);
