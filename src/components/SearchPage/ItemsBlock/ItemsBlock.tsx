import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store/configureStore";
import { addCityFilter } from "../../../store/dataSlice";
import { ItemCoworking } from "../../../components";
import { ItemsData } from "../../../types/Types";
import "./ItemsBlock.scss";

export const ItemsBlock: React.FC = () => {
  const DATA = useSelector((state: RootState) => state.data.filteredCoworkings);
  const city = useSelector((state: RootState) => state.data.cityFilter);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    id && dispatch(addCityFilter(id));
  }, [dispatch, id, city]);

  return (
    <div className='search-items-block'>
      {DATA.map((item: ItemsData, index) => (
        <ItemCoworking key={index} type='big' item={item} />
      ))}
    </div>
  );
};
