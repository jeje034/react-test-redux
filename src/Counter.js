//import './_Counter.scss';

// MUI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setIncrement, setDecrement } from "./redux/counter/counterAction";

const Counter = () => {
    const counter = useSelector((state) => state.counter);

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
