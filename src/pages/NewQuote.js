import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = ({ author, text }) => {
    console.log(author, text);
    fetch(
      "https://react-http-d480f-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json",
      {
        method: "POST",
        body: JSON.stringify({ author, text }),
      }
    );
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
