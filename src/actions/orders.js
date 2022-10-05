import {
    SET_MESSAGE,
   MAKE_ORDER_SUCCESS, 
   MAKE_ORDER_FAIL,
} from "./types";

import UserService from "../services/user.service";

export const makeOrder = (type) => (dispatch) => {
        return UserService.postMakeOrder(type).then(
                (response) => {
                    dispatch({
                        type:MAKE_ORDER_SUCCESS,
                    });

                    dispatch({
                        type: SET_MESSAGE,
                        payload: response.data,
                    });

                    return Promise.resolve();
                },
                (error) => {
                    const message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    dispatch({
                        type:MAKE_ORDER_FAIL,
                    });

                    dispatch({
                        type: SET_MESSAGE,
                        payload: message,
                    });

                    return Promise.reject();
                }
            );
    };

   