import ButtonPrimary from "./ButtonPrimary";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pickCoworking } from "../../store/dataSlice";

import { ItemsData } from "../../types/Types";

import Rating from "./Rating";

import "./ItemCoworking.scss";

const ItemCoworking: React.FC<{
  type: "big" | "regular" | "small" | "map";
  item: ItemsData;
}> = ({ type, item }) => {
  let style;

  switch (type) {
    case "big": {
      style = "coworking-item-big";
      break;
    }
    case "regular": {
      style = "coworking-item-regular";
      break;
    }
    case "small": {
      style = "coworking-item-small";
      break;
    }
    case "map": {
      style = "coworking-item-map";
      break;
    }
  }
  const dispatch = useDispatch();

  function setPickedCoworking() {
    dispatch(pickCoworking(item.id));
  }

  return (
    <div>
      <div className={style}>
        <Link
          to={`/item-page/${item.id}`}
          state={item.id}
          onClick={setPickedCoworking}
          className="image"
        >
          <img src={item.image} alt="CoworkingImage" />
          {item.top && <div className="top">TOП</div>}
        </Link>
        <div className="info">
          <div className="price-city">
            <p>{item.price} uah/day</p>
            <p className="city">Lviv</p>
          </div>
          <h4>{item.name}</h4>
          <div className="rating">
            <Rating rating={item.rating} />
            <p>{`${item.reviews} reviews`}</p>
          </div>
          <p className="city-main">{item.city}</p>
          <div className="button">
            <Link
              to={`/item-page/${item.id}`}
              state={item.id}
              onClick={setPickedCoworking}
            >
              <ButtonPrimary text="Open" secondary />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCoworking;
