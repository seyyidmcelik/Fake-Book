import * as actionTypes from "./actionTypes";

export const changeCategory = (currentCategory) => {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: currentCategory,
  };
};

export const getCategoriesSuccess = (categories) => {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

export const getCategories = () => {
  return function (dispatch) {
    let url = "http://localhost:3000/categories";
    return fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getCategoriesSuccess(data)));
  };
};
