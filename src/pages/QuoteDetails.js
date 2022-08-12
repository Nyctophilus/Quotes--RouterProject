import React, { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetails = () => {
  const { id } = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (error) return <p className="centered">{error}</p>;

  if (!loadedQuote.text)
    return <p className="centered">No Quote Found!</p>;

  console.log(loadedQuote);

  return (
    <>
      <HighlightedQuote {...loadedQuote} />

      <div className="centered">
        <Link to="comments" className="btn--flat">
          Load Comments
        </Link>
      </div>

      <Outlet />
    </>
  );
};

export default QuoteDetails;
