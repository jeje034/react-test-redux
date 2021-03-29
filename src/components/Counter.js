//import './_Counter.scss';

// MUI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//Redux
import { useSelector, useDispatch } from "react-redux";
import counterSlice from "../redux/counter/slice";

const { setIncrement, setDecrement } = counterSlice.actions;

const Counter = () => {
    //Sans combineReducers :
    //const counter = useSelector((state) => state.counter);

    //Avec combineReducers :
    //const counter = useSelector((state) => state.counterReducer.counter);
    const counter = useSelector((state) => state.counter);
    //const quote = useSelector((state) => state.quoteReducer);
    //console.log(quote.isLoading);

    const dispatch = useDispatch();
    console.log(counter);

    return (
        <>
            <Typography variant="h4">Counter: {counter}</Typography>

            <div>
                <Button
                    onClick={() => {
                        dispatch(setIncrement());
                    }}
                >
                    Increment
                </Button>
                <Button
                    onClick={() => {
                        dispatch(setDecrement());
                    }}
                >
                    Decrement
                </Button>
            </div>
        </>
    );
};

export default Counter;
