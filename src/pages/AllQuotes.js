import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
