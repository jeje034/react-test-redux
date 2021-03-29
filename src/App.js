import "./App.css";
import Counter from "./components/Counter";
import Quote from "./components/Quote";

function App() {
    return (
        <div>
            <Counter />
            <a href="https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random">
                Pour débloquer l'accès aux citations
            </a>
            <Quote />
        </div>
    );
}

export default App;
