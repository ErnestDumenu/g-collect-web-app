import {
    MAKE_ORDER_SUCCESS, 
    MAKE_ORDER_FAIL,
} from "../actions/types";

// const user = JSON.parse(localStorage.getItem("user"));

const initialState =  {
        isLoading: false,
        data: null,
        message: null }

export default function orderReducer (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case MAKE_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data:payload.order_no,
                message:payload.message
            };
        case MAKE_ORDER_FAIL:
            return {
                ...state,
                isLoading: false,
                data:payload.order_no,
                message:payload.message
            };
        default:
            return state;
    }
}
