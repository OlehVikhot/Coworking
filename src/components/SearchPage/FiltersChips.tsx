import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/configureStore";
import { clearAllFilters, removeFilter } from "../../store/dataSlice";

import ButtonText from "../UI/ButtonText";
import "./FiltersChips.scss";

const FiltersChips = () => {
  const dispatch = useDispatch();
  const chipsArr = useSelector((state: RootState) => state.data.appliedFilters);

  const hide = { display: "none" };

  function clearAllFiltersHandler() {
    dispatch(clearAllFilters());
  }

  function removeOneFilterHandler(filter: string) {
    dispatch(removeFilter(filter));
  }

  return (
    <div
      style={chipsArr.length === 0 ? hide : undefined}
      className="search-filter-chips"
    >
      {chipsArr.map((item) => (
        <div key={Math.random()} className="chip">
          <p>{item}</p>
          <svg
            onClick={() => removeOneFilterHandler(item)}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_94_3314)">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_94_3314">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ))}
      {chipsArr.length > 0 ? (
        <ButtonText text="Clear all" onClick={clearAllFiltersHandler} />
      ) : (
        ""
      )}
    </div>
  );
};

export default FiltersChips;
