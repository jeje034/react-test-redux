import {
    FETCH_QUOTE_REQUEST,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAIL,
} from "./constants";

const initialState = {
    quoteInHtml: "",
    quoteInText: "",
    author: "",
    isLoading: true,
    error: "",
};

export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTE_REQUEST:
            return {
                ...state,
                quoteInHtml: "",
                quoteInText: "",
                author: "",
                isLoading: true,
                error: "",
            };

        case FETCH_QUOTE_SUCCESS:
            return {
                ...state,
                quoteInHtml: action.payload[0].h,
                quoteInText: action.payload[0].q,
                author: action.payload[0].a,
                isLoading: false,
                error: "",
            };

        case FETCH_QUOTE_FAIL:
            return {
                ...state,
                quoteInHtml: "",
                quoteInText: "",
                author: "",
                isLoading: false,
                error: action.payload.errorMessage,
            };

        default:
            return state;
    }
};
