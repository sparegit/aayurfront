import * as actionTypes from "../services/shopping_types";
const INITIAL_STATE = {
  product: [],
  cart: [],
  currentItem: null,
};
const shopReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.ADJUST_QTY:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return INITIAL_STATE;
  }
};
export default shopReducer;
