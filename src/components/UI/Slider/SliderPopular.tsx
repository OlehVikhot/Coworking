import { useState } from "react";
import { ItemsData } from "../../../types/Types";
import ItemCoworking from "../ItemCoworking";
import ButtonSlider from "./ButtonSlider";

import "./SliderPopular.scss";

const SliderPopular: React.FC<{
  city: string;
  cowArray: ItemsData[];
}> = ({ city, cowArray }) => {
  const [itemSlide, setItemSlide] = useState(0);

  let firstButtonStyle: "active" | "unactive" = "active";
  let secondButtonStyle: "active" | "unactive" = "active";

  if (itemSlide === 0) {
    firstButtonStyle = "unactive";
    secondButtonStyle = "active";
  }
  if (itemSlide > 0 && itemSlide < cowArray.length) {
    firstButtonStyle = "active";
    secondButtonStyle = "active";
  }
  if (itemSlide === cowArray.length - 2) {
    firstButtonStyle = "active";
    secondButtonStyle = "unactive";
  }

  return (
    <div className="slider-container">
      <h2>{`Popular coworking spaces in ${city}`}</h2>
      <div className="items-container">
        {cowArray.map((item, index) => {
          if (index === itemSlide || index === itemSlide + 1) {
            return <ItemCoworking key={item.id} type={"regular"} item={item} />;
          }
        })}
      </div>
      <div className="buttons-container">
        <ButtonSlider
          position="left"
          status={firstButtonStyle}
          onClick={itemSlide > 0 ? () => setItemSlide(itemSlide - 1) : () => {}}
        />
        <ButtonSlider
          position="right"
          status={secondButtonStyle}
          onClick={
            itemSlide < cowArray.length - 2
              ? () => setItemSlide(itemSlide + 1)
              : () => {}
          }
        />
      </div>
    </div>
  );
};

export default SliderPopular;
