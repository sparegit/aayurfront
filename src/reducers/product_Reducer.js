import{actionTypes} from '../services/product_Types'

const INITIAL_STATE={
    products:[],
};
 const productReducer =( state=INITIAL_STATE,{type,payload})=>{
    switch(type){
        case actionTypes.SET_PRODUCTS:
            return {...state,products:payload};
            default:
                return state;
    }
}
export default productReducer;