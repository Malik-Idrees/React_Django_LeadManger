import { createStore, applyMiddleware } from "redux";
{
  /*middleware*/
}
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
{
  /*will search for index.js file in ./reducers*/
}
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
