import { combineReducers } from "redux";
import product_reducer from "./Product_reducer";

const reducers = combineReducers({
    product: product_reducer,
});

export default reducers;
