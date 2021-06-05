import {combineReducers} from 'redux'
import shopReducer from '../reducers/shopping_reducer'
import productReducer from '../reducers/product_Reducer'
import userReducer from '../reducers/userReducer';
const rootReducer = combineReducers({
    shop: shopReducer,
    product: productReducer,
    user: userReducer
});
export default rootReducer;