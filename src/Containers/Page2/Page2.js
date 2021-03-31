import Counter from "../../components/Counter/Counter";
import Quote from "../../components/Quote/Quote";
import "./_Page2.scss";

const Page2 = () => {
    return (
        <div>
            <div>Page 2</div>
            <Counter />
            {<Quote />}
        </div>
    );
};

export default Page2;
