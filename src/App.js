import { lazy, Suspense } from "react";
import {
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AllQuotes = lazy(() => import("./pages/AllQuotes"));
const NotFound = lazy(() => import("./pages/NotFound"));
const NewQuote = lazy(() => import("./pages/NewQuote"));
const QuoteDetails = lazy(() =>
  import("./pages/QuoteDetails")
);
const Comments = lazy(() =>
  import("./components/comments/Comments")
);

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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
      </Suspense>
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
