import {
    FETCH_QUOTE_REQUEST,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAIL,
} from "./constants";

export const fetchQuote = () => (dispatch) => {
    dispatch({ type: FETCH_QUOTE_REQUEST });

    const proxy = "https://cors-anywhere.herokuapp.com/";

    const quoteUrl = "https://zenquotes.io/api/random";

    fetch(proxy + quoteUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return dispatch({ type: FETCH_QUOTE_SUCCESS, payload: data });
        })
        .catch((err) => dispatch({ type: FETCH_QUOTE_FAIL, payload: err }));
};
