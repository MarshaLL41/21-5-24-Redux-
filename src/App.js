import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Child from "./Components/Child";
import { product_Action } from "./State/Actions";

const App = () => {
    const action_variable = useSelector((state) => state.product);
    const dispatch = useDispatch();
    return (
        <div>
            App :- {action_variable.product_name} {action_variable.product_price}
            <div className="d-flex">
                <button
                    onClick={() => {
                        dispatch(product_Action.product_price_add(1000));
                    }}
                    className="btn btn-dark d-inline-block"
                >
                    Increase +
                </button>
                <button
                    onClick={() => {
                        dispatch(product_Action.product_price_minus(1000));
                    }}
                    className="btn btn-dark d-inline-block"
                >
                    Decrease -
                </button>
            </div>
            <Child></Child>
        </div>
    );
};

export default App;
