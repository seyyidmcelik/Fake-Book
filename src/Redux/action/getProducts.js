import * as actionTypes from "./actionTypes";

export const getProductsSuccess = (products) => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const getProducts = (categoryId) => {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if(categoryId){
        url = url + "?categoryId=" + categoryId
    }
    return fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getProductsSuccess(data)));
  };
};
