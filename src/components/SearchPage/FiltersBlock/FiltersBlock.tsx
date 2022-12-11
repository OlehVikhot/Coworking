import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { addFilter, removeFilter } from "../../../store/dataSlice";
import { FILTER_LIST } from "../../../constants/DATA";
import "./FiltersBlock.scss";

const FilterListElement: React.FC<{ text: string }> = ({ text }) => {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const appliedFilters = useSelector(
    (state: RootState) => state.data.appliedFilters
  );

  useEffect(() => {
    for (let i = 0; i < appliedFilters.length + 1; i++) {
      if (appliedFilters.length === 0) {
        setIsChecked(false);
        break;
      }

      if (appliedFilters[i] === text) {
        setIsChecked(true);
        break;
      } else {
        setIsChecked(false);
      }
    }
  }, [appliedFilters, text]);

  const addRemoveFilterHandler = (filter: string) => {
    if (!isChecked) {
      setIsChecked(true);
      dispatch(addFilter(filter));
    }

    if (isChecked) {
      setIsChecked(false);
      dispatch(removeFilter(filter));
    }
  };

  return (
    <div className='filter-list-element'>
      <div className='checkbox' onClick={() => addRemoveFilterHandler(text)}>
        {isChecked && (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_88_57)'>
              <path
                d='M9.00002 16.2L4.80002 12L3.40002 13.4L9.00002 19L21 6.99998L19.6 5.59998L9.00002 16.2Z'
                fill='black'
              />
            </g>
            <defs>
              <clipPath id='clip0_88_57'>
                <rect width='24' height='24' fill='white' />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

const FilterInputElement = () => {
  return (
    <div className='filter-input-element'>
      <input type='text' placeholder='Number of people' />
      <div className='icon'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_75_109)'>
            <path d='M7 10L12 15L17 10H7Z' fill='black' />
          </g>
          <defs>
            <clipPath id='clip0_75_109'>
              <rect width='24' height='24' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

const FilterList: React.FC<{
  listOfFilter: { id: number; filterName: string; filterList?: string[] };
}> = ({ listOfFilter }) => {
  return (
    <div className='search-filter-list'>
      <h4>{listOfFilter.filterName}</h4>
      <div className='filter-list'>
        {listOfFilter.filterList ? (
          listOfFilter.filterList.map((item, index) => (
            <FilterListElement key={index} text={item} />
          ))
        ) : (
          <FilterInputElement />
        )}
      </div>
    </div>
  );
};

export const FiltersBlock = () => {
  return (
    <div className='search-filter-block'>
      <div>
        <h3>Фільтри</h3>
      </div>
      {FILTER_LIST.map((item) => (
        <FilterList key={item.id} listOfFilter={item} />
      ))}
    </div>
  );
};
