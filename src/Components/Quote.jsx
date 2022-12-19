import React from "react";
import "../index.css";

function QuoteApp({ quote }) {
  return (
    <div className="Quote">
      <div className="anime" title={quote.anime}>
        {quote.anime}
      </div>
      <blockquote>{quote.quote}</blockquote>
      <div className="charachter" title={quote.character}>
        {quote.character}
      </div>
    </div>
  );
}

export default QuoteApp;
