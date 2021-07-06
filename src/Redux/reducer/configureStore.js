import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from ".";

export default function configureStore() {
  return createStore(rootReducers, applyMiddleware(thunk));
}
