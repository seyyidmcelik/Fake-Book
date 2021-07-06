import { combineReducers } from "redux";
import getCategoriesReducer from "./getCategoriesReducer";
import getProductsReducer from "./getProductsReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import cartReducer from "./cartReducer";

const rootReducers = combineReducers({
  getCategoriesReducer,
  getProductsReducer,
  changeCategoryReducer,
  cartReducer,
});

export default rootReducers;
