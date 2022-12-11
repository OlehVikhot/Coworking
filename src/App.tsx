import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary";
import Loader from "./pages/Loader/Loader";
import Layout from "./pages/Layout/Layout";

const ItemPage = React.lazy(() => import("./pages/ItemPage/ItemPage"));
const MainPage = React.lazy(() => import("./pages/MainPage/MainPage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route path='*' element={<MainPage />} />
            <Route path='/search/:id' element={<SearchPage />} />
            <Route path='/item-page/:id' element={<ItemPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
