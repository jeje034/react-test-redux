import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware } from "redux"; //applyMiddleware pour l'asynchrone, combineReducers lorsqu'il y a plusieurs reducers
import thunk from "redux-thunk"; //thunk pour l'asynchrone
import counterSlice from "./redux/counter/slice";

//Reducers
import { quoteReducer } from "./redux/quote/quoteReducer";

//const reducers = { counterReducer, quoteReducer };
//const reduc = combineReducers(reducers);
//const store = configureStore(reduc, applyMiddleware(thunk));

const store = configureStore({
    reducer: counterSlice.reducer,
    quoteReducer,
});

//Si Counter seul :
//const store = createStore(counterReducer);

console.log("store.getState():", store.getState());

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
