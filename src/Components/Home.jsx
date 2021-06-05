import React from 'react'
import Card from './Card';
import {useSelector,useDispatch} from 'react-redux' 
import { setProducts } from '../actions/product_Actions';
const { useEffect } = React;
const axios = require('axios');




function Home() {
   const products = useSelector((state)=>state.product.products)
   const dispatch = useDispatch();
   

const getMedList = async()=>{
  const {data} = await axios.get("http://localhost:8080/medicine/")

  dispatch(setProducts(data));
}

  useEffect(() => {
    getMedList();
  },[]);
  console.log(products);
  
  return (
    <div className="container-md d-flex justify-content-lg-evenly justify-content-center " >
      {products.length &&
        products.map((med) => (
          <div className="row" key={med.medicineId} >
            <div className="col-sm-4">
            <Card med={med}></Card>
            </div>
          </div>
        ))
      }


    </div>

  )
}

export default Home
