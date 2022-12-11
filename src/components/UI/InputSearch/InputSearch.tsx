import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store/configureStore";
import { addCityFilter } from "../../../store/dataSlice";
import { DropDownList } from "../../../components";
import { FiSearch } from "react-icons/fi";
import "./InputSearch.scss";

export const InputSearch: React.FC<{
  placeholder: string;
  getText?: (city: string) => void;
  navigation?: boolean;
}> = ({ placeholder, getText, navigation }) => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");

  const availableCities = useSelector(
    (state: RootState) => state.data.availableCities
  );
  const city = useSelector((state: RootState) => state.data.cityFilter);

  function inputActiveHandler() {
    setIsActive(true);
  }

  let navigate = useNavigate();

  function addCityFilterHandler(city: string) {
    dispatch(addCityFilter(city));
    navigation && navigate(`/search/${city}`);
    setIsActive(false);
  }

  // function inputInActiveHandler() {
  //   setIsActive(false);
  // }

  function getInputText(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  const filteredCities = availableCities.filter((item) =>
    item.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div className='search-input'>
      <input
        className='input'
        type='text'
        placeholder={city ? city : placeholder}
        onChange={(e) => getInputText(e)}
        onFocus={inputActiveHandler}
        // onBlur={inputInActiveHandler}
      />
      <div className='icon'>
        <FiSearch />
      </div>
      {isActive && (
        <DropDownList
          citiesList={filteredCities}
          pickCity={addCityFilterHandler}
        />
      )}
    </div>
  );
};
