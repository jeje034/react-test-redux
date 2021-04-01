import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

//Redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"; //combineReducers lorsqu'il y a plusieurs reducers
import counterReducer from "./components/Counter/counterSlice";
import quoteReducer from "./components/Quote/quoteSlice";

const store = configureStore({
    reducer: combineReducers({
        counter: counterReducer,
        quote: quoteReducer,
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
