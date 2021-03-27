import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Redux
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux"; //applyMiddleware pour l'asynchrone, combineReducers lorsqu'il y a plusieurs reducers
import thunk from "redux-thunk"; //thunk pour l'asynchrone

//Reducers
import { counterReducer } from "./redux/counter/counterReducer";
import { quoteReducer } from "./redux/quote/quoteReducer";

const reducers = { counterReducer, quoteReducer };
const reduc = combineReducers(reducers);
const store = createStore(reduc, applyMiddleware(thunk));

//Si Counter seul :
//const store = createStore(counterReducer);

//console.log("store.getState():", store.getState());

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
