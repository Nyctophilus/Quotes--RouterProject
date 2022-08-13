import {
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="quotes" />}
        />
        <Route path="quotes" element={<AllQuotes />} />

        <Route
          path="quotes/:id/*"
          element={<QuoteDetails />}
        >
          <Route path="" element={<LoadComments />} />

          <Route path="comments" element={<Comments />} />
        </Route>

        <Route path="new-quote" element={<NewQuote />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

const LoadComments = () => (
  <div className="centered">
    <Link to="comments" className="btn--flat">
      Load Comments
    </Link>
  </div>
);

export default App;
