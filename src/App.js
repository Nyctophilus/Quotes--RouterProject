import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="quotes" />}
        />
        <Route path="quotes" element={<AllQuotes />} />

        <Route path="quotes/:id" element={<QuoteDetails />}>
          <Route path="comments" element={<Comments />} />
        </Route>

        <Route path="new-quote" element={<NewQuote />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
