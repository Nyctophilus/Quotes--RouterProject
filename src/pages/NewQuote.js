import React, { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";

import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") navigate("/");
  }, [status, navigate]);

  const addQuoteHandler = ({ author, text }) => {
    sendRequest({ author, text });
  };

  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={addQuoteHandler}
    />
  );
};

export default NewQuote;
