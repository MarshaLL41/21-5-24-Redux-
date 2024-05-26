import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Child from "./Components/Child";
import { product_Action } from "./State/Actions";

const App = () => {
    const action_variable = useSelector((state) => state.product);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="border border-2 border-dark p-4 my-3 w-50 mx-auto text-center">
                <h3>App Page </h3>
                <p className="m-0">Product_Name :- {action_variable.product_name}</p>
                <p className="m-0">Product_Price :- {action_variable.product_price}</p>
                <div className="d-flex gap-4 justify-content-center mt-2">
                    <button
                        onClick={() => {
                            dispatch(product_Action.product_price_add(1000));
                        }}
                        className="btn btn-success d-inline-block"
                    >
                        Increase +
                    </button>
                    <button
                        onClick={() => {
                            dispatch(product_Action.product_price_minus(1000));
                        }}
                        className="btn btn-danger d-inline-block"
                    >
                        Decrease -
                    </button>
                </div>
            </div>
            <Child></Child>
        </div>
    );
};

export default App;
