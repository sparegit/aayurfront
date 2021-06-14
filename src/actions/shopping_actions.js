import * as actionTypes  from '../services/shopping_types'
import axios from 'axios'
export const addToCart = (itemID,custid) => async (dispatch) => {
    try {
   
        const url = `http://localhost:8080/shoppingCart/addProduct/${encodeURI(itemID)}/${encodeURI(custid)}`
        
        console.log("url of add to cart", url);
        const res= postCartItem(url);
        console.log(res);
        dispatch({
          type: actionTypes.ADD_TO_CART,
          payload: res.data,
        });
      } catch (err) {
        dispatch({ type: actionTypes.ADD_TO_CART, payload: err });
      }
}


export const setCart=(products)=>{
    return{
        type: actionTypes.SET_CART,
        payload: products
    }
}
export const postCartItem = async(funcParamURL) => {
  console.log(funcParamURL)
  const res= await axios.post(`${funcParamURL}`);
   return res;
 }