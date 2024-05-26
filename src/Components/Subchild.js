import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { product_Action } from "../State/Actions";

const Subchild = () => {
    const lol = useSelector((state) => state.product);
    const dispatch = useDispatch();
    return (
        <div className="border border-2 border-dark p-4 w-50 mx-auto text-center">
            <h3>Subchild page</h3>
            <p className="m-0">product_price :- {lol.product_price}</p>
            <p className="m-0">product_name :- {lol.product_name}</p>
            <div className="d-flex gap-4 mt-2 justify-content-center">
                <button
                    className="btn btn-success d-inline-block"
                    onClick={() => {
                        dispatch(product_Action.product_price_add(1000));
                    }}
                >
                    Increase +
                </button>
                <button
                    className="btn btn-danger d-inline-block"
                    onClick={() => {
                        dispatch(product_Action.product_price_minus(1000));
                    }}
                >
                    Decrease -
                </button>
            </div>
        </div>
    );
};

export default Subchild;
