import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"; //combineReducers lorsqu'il y a plusieurs reducers
import counterSlice from "./redux/counter/slice";
import quoteSlice from "./redux/quote/quoteSlice";

const store = configureStore({
    reducer: combineReducers({
        counterReducer: counterSlice.reducer,
        quoteReducer: quoteSlice.reducer,
    }),
});

console.log("store.getState():", store.getState());

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
