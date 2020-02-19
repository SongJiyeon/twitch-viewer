import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/games";

const middlewares = [thunk];

export default createStore(reducer, applyMiddleware(...middlewares));