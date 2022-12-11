import { useLocation } from "react-router-dom";
import {
  NavigationBar,
  FiltersBlock,
  FiltersChips,
  ItemsBlock,
  Sort,
} from "../../components";
import "./SearchPage.scss";

const SearchPage = () => {
  // const location = useLocation();
  // const { id } = useParams();
  // let [searchParams] = useSearchParams();

  return (
    <>
      <NavigationBar search />
      <div className='search-page'>
        <Sort />
        <FiltersChips />
        <div className='main-block'>
          <div className='filter-block'>
            <FiltersBlock />
          </div>
          <div className='items-block'>
            <ItemsBlock />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchPage;
