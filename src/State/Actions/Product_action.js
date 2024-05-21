import { type } from "@testing-library/user-event/dist/type";

const product_price_add = (data) => {
    return (dispatch) => {
        dispatch({
            type: "ADD",
            payload: data,
        });
    };
};

const product_price_minus = (data) => {
    return (dispatch) => {
        dispatch({
            type: "MINUS",
            payload: data,
        });
    };
};

export { product_price_add, product_price_minus };
