import { useState, useEffect } from "react";
import "./App.css";
import QuoteApp from "./Components/Quote";

function App() {
  const [quote, setQuote] = useState({
    quote: null,
    character: null,
    anime: null,
  });

  const fetchQuote = async () => {
    return await fetch("https://animechan.vercel.app/api/random").then(
      (response) => response.json()
    );
  };

  const fetchNewQuote = async () => {
    setQuote(await fetchQuote());
  };

  useEffect(() => {
    setQuote(fetchQuote());
  }, []);

  return (
    <div className="App">
      <QuoteApp quote={quote} />
      <button onClick={fetchNewQuote}>New Quote!</button>
    </div>
  );
}

export default App;
