import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import order from "./order"
import receipt from "./receipt"

export default combineReducers({
    auth,
    message,
    order,
    receipt

});