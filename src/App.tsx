import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ItemPage from "./pages/ItemPage";
import MainPage from "./pages/MainPage";
import PageNotFound from "./pages/PageNotFound";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/search/:id" element={<SearchPage />} />
        <Route path="/item-page/:id" element={<ItemPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
