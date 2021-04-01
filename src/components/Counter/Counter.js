import "./_Counter.scss";

// MUI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setIncrement, setDecrement } from "./counterSlice";

const Counter = () => {
    const counter = useSelector((state) => state.counterStore.counter);

    const dispatch = useDispatch();
    console.log("counter:", counter);

    return (
        <>
            <Typography variant="h4">Counter: {counter}</Typography>

            <div className="counteur-aurond-buttons">
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
