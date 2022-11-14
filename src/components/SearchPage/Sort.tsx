import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import HeaderLayout from "../layout/HeaderLayout";
import DropDownButton from "../UI/DropDownButton";

import listIcon from "../../assets/icons/format_list_bulleted.svg";
import sortIcon from "../../assets/icons/swap_vert.svg";

import "./Sort.scss";

const LIST_LIST = [
  "Cheaper at first",
  "Expensive at first",
  "By rating",
  "By popularity",
];

const SORT_LIST = ["List", "Map"];

const Sort = () => {
  const filteredCoworkings = useSelector(
    (state: RootState) => state.data.filteredCoworkings
  );
  const city = useSelector((state: RootState) => state.data.cityFilter);

  let content = (
    <p>{`Found ${filteredCoworkings.length} coworking spaces in ${city}`}</p>
  );

  if (!city) {
    content = <p>{`Found ${filteredCoworkings.length} coworking spaces`}</p>;
  }

  return (
    <HeaderLayout>
      <div className="seacrh-sort-component">
        <div className="amount">{content}</div>
        <div className="sort">
          <div className="sort-text">
            <p>Show as:</p>
          </div>
          <DropDownButton
            text="List"
            iconLeft={listIcon}
            dropDownList={SORT_LIST}
            getElement={() => {}}
          />
          <DropDownButton
            text="Sort"
            iconLeft={sortIcon}
            dropDownList={LIST_LIST}
            getElement={() => {}}
          />
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Sort;
