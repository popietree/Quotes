import Layout from "./components/layout/Layout";

import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
// import NewQuote from "./pages/NewQuote";
// import QuoteDetail from "./pages/QuoteDetail";
// import NotFound from "./pages/NotFound";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
function App() {
  return (
    // APP Structure
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>

          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;