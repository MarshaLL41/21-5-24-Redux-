import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { product_Action } from "../State/Actions";

const Subchild = () => {
    const lol = useSelector((state) => state.product);
    const dispatch = useDispatch();
    return (
        <div>
            Subchild page
            <p className="m-0">product_price :- {lol.product_price}</p>
            <p className="m-0">product_name :- {lol.product_name}</p>
            <div className="d-flex gap-3 mt-3">
                <button
                    className="btn btn-dark d-inline-block"
                    onClick={() => {
                        dispatch(product_Action.product_price_add(1000));
                    }}
                >
                    Increase +
                </button>
                <button
                    className="btn btn-dark d-inline-block"
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
