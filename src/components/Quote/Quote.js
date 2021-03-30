import "./_Quote.scss";
import { Button } from "@material-ui/core";
import { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "./quoteSlice";

const Quote = () => {
    const { quoteInText, author, isLoading, error } = useSelector(
        (state) => state.quoteStore
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuote());
    }, [dispatch]);
    return (
        <>
            {isLoading ? (
                <div className="quote-main">
                    Recherche d'une citation en cours...
                </div>
            ) : (
                <div className="quote-main">
                    {error && error.length !== 0 && <div>{error}</div>}
                    <div>{quoteInText}</div>
                    <div>{author}</div>
                    <Button
                        onClick={() => {
                            dispatch(fetchQuote());
                        }}
                    >
                        New Quote
                    </Button>
                </div>
            )}
        </>
    );
};

export default Quote;
