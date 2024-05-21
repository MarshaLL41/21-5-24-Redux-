const product_reducer = (state = { product_name: "NVIDIA", product_price: 10000 }, action) => {
    if (action.type == "ADD") {
        return { ...state, product_price: state.product_price + action.payload };
    } else if (action.type == "MINUS") {
        return { ...state, product_price: state.product_price - action.payload };
    } else {
        return state;
    }
};

export default product_reducer;
