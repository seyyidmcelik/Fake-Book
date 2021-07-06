import * as actionTypes from "../action/actionTypes";
import initialState from "./initialState";

const getProductsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default getProductsReducer;
