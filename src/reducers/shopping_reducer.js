import * as actionTypes from "../services/shopping_types";
const INITIAL_STATE = {
  cart: [],
  currentItem: null,
};
const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: payload
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: payload
      };
    case actionTypes.ADJUST_QTY:
      return { ...state };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    case actionTypes.SET_CART:
      return { ...state, cart: payload };
    default:
      return INITIAL_STATE;
  }
};
export default shopReducer;
