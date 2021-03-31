import Counter from "../../components/Counter/Counter";
import Quote from "../../components/Quote/Quote";
import "./_Page1.scss";

const Page1 = () => {
    return (
        <div>
            <div>Page 1</div>
            <Counter />
            <a href="https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random">
                Pour débloquer l'accès aux citations
            </a>
            {<Quote />}
        </div>
    );
};

export default Page1;
