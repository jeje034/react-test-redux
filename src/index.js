import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Redux
import { Provider } from "react-redux";
import { createStore } from "redux";

//Reducer
import { counterReducer } from "./redux/counter/counterReducer";

const store = createStore(counterReducer);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
