import {
    createSlice, //, PayloadAction pas utile pour ce composant Couter. Est utile pour le composant Quote
} from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        setIncrement(state) {
            state.counter++; //On modifie l'état, mais c'est OK grâce à Immer
        },
        setDecrement(state) {
            state.counter--; //On modifie l'état, mais c'est OK grâce à Immer
        },
    },
});

export default counterSlice;
