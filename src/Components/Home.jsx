import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../actions/product_Actions";
import { setCart } from "../actions/shopping_actions";
import { connect } from "react-redux";
import { addToCart } from "../actions/shopping_actions";
import MedicineComponent from "./MedicineComponent";
import Footer from "./footer";
const { useEffect } = React;

const axios = require("axios");
let id = localStorage.getItem("userId");

function Home({ addToCart }) {
  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  const getCartItems = async () => {
    let id = localStorage.getItem("userId");
    console.log("userid", id);
    const res = await axios.get(
      `http://localhost:8080/getproducts/cart/${encodeURI(id)}`
    );
    console.log("cart res", res);

    dispatch(setCart(res.data));
  };
  const handleAdd = (medid) => {
    if (medid === null) {
      alert("login");
    } else {
      console.log("med", medid);
      addToCart(medid, id);
      getCartItems();
    }
  };

  const getMedList = async () => {
    const { data } = await axios.get("http://localhost:8080/medicine/");

    dispatch(setProducts(data));
  };

  useEffect(() => {
    getMedList();
    // getCartItems();
  }, []);
  console.log(products);

  return <MedicineComponent />;

}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps, { addToCart })(Home);
