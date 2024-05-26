import React from "react";
import Subchild from "./Subchild";
import { useDispatch, useSelector } from "react-redux";
import { product_Action } from "../State/Actions";

const Child = () => {
    const child_variable = useSelector((state) => state.product);
    const dispatch = useDispatch();
    return (
        <>
            <div className="border border-2 border-dark p-4 my-3 w-50 mx-auto text-center">
                <h3>Child page</h3>
                <p className="m-0">Product_Name :- {child_variable.product_name}</p>
                <p className="m-0">Product_Price :- {child_variable.product_price}</p>
                <div className="d-flex justify-content-center mt-2 gap-4">
                    <button
                        className="btn btn-success d-block"
                        onClick={() => {
                            dispatch(product_Action.product_price_add(1000));
                        }}
                    >
                        Increase +
                    </button>
                    <button
                        className="btn btn-danger d-block"
                        onClick={() => {
                            dispatch(product_Action.product_price_minus(1000));
                        }}
                    >
                        Decrease -
                    </button>
                </div>
            </div>
            <Subchild></Subchild>
        </>
    );
};

export default Child;
