import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { ItemsData } from "../../types/Types";

import ItemCoworking from "../UI/ItemCoworking";
import "./ItemsBlock.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { addCityFilter } from "../../store/dataSlice";

const ItemsBlock: React.FC<{}> = ({}) => {
  const DATA = useSelector((state: RootState) => state.data.filteredCoworkings);
  const city = useSelector((state: RootState) => state.data.cityFilter);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    id && dispatch(addCityFilter(id));
  }, [dispatch, id, city]);

  return (
    <div className="search-items-block">
      {DATA.map((item: ItemsData) => (
        <ItemCoworking key={Math.random()} type="big" item={item} />
      ))}
    </div>
  );
};

export default ItemsBlock;
