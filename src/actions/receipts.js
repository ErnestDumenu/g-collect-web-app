import {
    SET_MESSAGE,
    FETCH_RECEIPTS_SUCCESS, 
    FETCH_RECEIPTS_FAIL,
    FETCH_RECEIPT_SUCCESS, 
    FETCH_RECEIPT_FAIL 

} from "./types";

import UserService from "../services/user.service";

export const fetchAllReceipts = (
    ) => (dispatch) => {
        return UserService.getAllReceipts().then(
                (response) => {
                    dispatch({
                        type: FETCH_RECEIPTS_SUCCESS,
                        payload: response.data,
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
                        type: FETCH_RECEIPTS_FAIL,
                        payload: message,
                    });

                    dispatch({
                        type: SET_MESSAGE,
                        payload: message,
                    });

                    return Promise.reject();
                }
            );
    };

    export const fetchOneReceipt = (
        ) => (dispatch) => {
            return UserService.getOneReceipt().then(
                    (response) => {
                        dispatch({
                            type: FETCH_RECEIPT_SUCCESS,
                            payload: response.data,
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
                            type: FETCH_RECEIPT_FAIL,
                            payload: message,
                        });
    
                        dispatch({
                            type: SET_MESSAGE,
                            payload: message,
                        });
    
                        return Promise.reject();
                    }
                );
        };