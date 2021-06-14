import {combineReducers} from 'redux'
import shopReducer from '../reducers/shopping_reducer'
import productReducer from '../reducers/product_Reducer'
import userReducer from '../reducers/userReducer';
const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    shop: shopReducer,
   
});
export default rootReducer;