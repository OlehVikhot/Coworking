import { useLocation } from "react-router-dom";

import NavigationBar from "../components/layout/NavigationBar";
import FiltersBlock from "../components/SearchPage/FiltersBlock";
import FiltersChips from "../components/SearchPage/FiltersChips";
import ItemsBlock from "../components/SearchPage/ItemsBlock";
import Sort from "../components/SearchPage/Sort";

import "./SearchPage.scss";

const SearchPage = () => {
  // const location = useLocation();
  // const { id } = useParams();
  // let [searchParams] = useSearchParams();

  return (
    <>
      <NavigationBar search />
      <div className="search-page">
        <Sort />
        <FiltersChips />
        <div className="main-block">
          <div className="filter-block">
            <FiltersBlock />
          </div>
          <div className="items-block">
            <ItemsBlock />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
