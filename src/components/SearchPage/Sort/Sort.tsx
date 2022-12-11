import { useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { HeaderLayout, DropDownButton } from "../../../components";
import { LIST_LIST, SORT_LIST } from "../../../util/DATA";
import listIcon from "../../../assets/icons/format_list_bulleted.svg";
import sortIcon from "../../../assets/icons/swap_vert.svg";
import "./Sort.scss";

export const Sort = () => {
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
      <div className='seacrh-sort-component'>
        <div className='amount'>{content}</div>
        <div className='sort'>
          <div className='sort-text'>
            <p>Show as:</p>
          </div>
          <DropDownButton
            text='List'
            iconLeft={listIcon}
            dropDownList={SORT_LIST}
            getElement={() => {}}
          />
          <DropDownButton
            text='Sort'
            iconLeft={sortIcon}
            dropDownList={LIST_LIST}
            getElement={() => {}}
          />
        </div>
      </div>
    </HeaderLayout>
  );
};
