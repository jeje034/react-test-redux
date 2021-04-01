import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    quoteInHtml: "",
    quoteInText: "",
    author: "",
    isLoading: true,
    error: "",
};

const quoteSlice = createSlice({
    name: "quote",
    initialState: initialState,
    reducers: {
        fetchQuoteRequest(state) {
            state.quoteInHtml = "";
            state.quoteInText = "";
            state.author = "";
            state.isLoading = true;
            state.error = "";
        },
        fetchQuoteSucces(state, action) {
            state.quoteInHtml = action.payload[0].h;
            state.quoteInText = action.payload[0].q;
            state.author = action.payload[0].a;
            state.isLoading = false;
            state.error = "";
        },
        fetchQuoteFail(state, action) {
            state.quoteInHtml = "";
            state.quoteInText = "";
            state.author = "";
            state.isLoading = false;
            state.error = action.payload
                ? action.payload
                : "An error occurs while fetching quote.";
        },
    },
});

export default quoteSlice.reducer;

//Actions
const {
    fetchQuoteRequest,
    fetchQuoteSucces,
    fetchQuoteFail,
} = quoteSlice.actions;

export const fetchQuote = () => async (dispatch) => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const quoteUrl = "https://zenquotes.io/api/random";

    try {
        //D'abord on indique que la requête est en cours
        dispatch(fetchQuoteRequest());

        //Puis on appelle l'API
        const response = await axios.get(proxy + quoteUrl);
        return dispatch(fetchQuoteSucces(response.data));
    } catch (err) {
        dispatch(fetchQuoteFail(err.message));
    }

    // Autre solution : sans axios
    // fetch(proxy + quoteUrl)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         return dispatch(fetchQuoteSucces(data));
    //     })
    //     .catch((err) => dispatch(fetchQuoteFail(err.message)));
};
