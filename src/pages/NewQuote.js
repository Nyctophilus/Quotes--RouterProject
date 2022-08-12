import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

import { useNavigate } from "react-router-dom";

const NewQuote = () => {
  const navigate = useNavigate();
  const addQuoteHandler = ({ author, text }) => {
    console.log(author, text);

    // fetch(
    //   "https://react-http-d480f-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({ author, text }),
    //   }
    // );

    navigate("/");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
