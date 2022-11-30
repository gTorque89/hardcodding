import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn bg-light position-relative">
            <img src="images/icon/basket.svg" alt="" width="24px" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1
        </span>
        </button>
    )
}

export default CartWidget