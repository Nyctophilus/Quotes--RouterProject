import React from "react";
import { Outlet, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Medo",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Muhammed",
    text: "Love And Thunder",
  },
];

const QuoteDetails = () => {
  const { id } = useParams();

  const currQuote = DUMMY_QUOTES.find((q) => q.id === id);

  if (!currQuote) return <NoQuotesFound />;

  return (
    <>
      <HighlightedQuote {...currQuote} />

      <Outlet />
    </>
  );
};

export default QuoteDetails;
