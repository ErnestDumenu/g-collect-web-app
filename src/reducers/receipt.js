import {
    FETCH_RECEIPTS_SUCCESS, 
    FETCH_RECEIPTS_FAIL,
    FETCH_RECEIPT_SUCCESS, 
    FETCH_RECEIPT_FAIL 

} from "../actions/types";

// const user = JSON.parse(localStorage.getItem("user"));

const initialState =  {
        data: null,
        message: null }

export default function receiptReducer (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_RECEIPTS_SUCCESS || FETCH_RECEIPT_SUCCESS :
            return {
                ...state,
                data:payload.orders,
                message:payload.message
            };
        case FETCH_RECEIPTS_FAIL || FETCH_RECEIPT_FAIL :
            return {
                ...state,
                data:payload.order_no,
                message:payload.message
            };
        default:
            return state;
    }
}
