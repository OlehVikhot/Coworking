import { useState } from "react";
import "./DropDownButton.scss";
import DropDownList from "./DropDownList";

const DropDownButton: React.FC<{
  text: string;
  iconLeft?: string;
  dropDownList: string[];
  getElement: (city: string) => void;
}> = ({ text, iconLeft, dropDownList, getElement }) => {
  const [isActive, setIsActive] = useState(false);

  function dropDownHandelr() {
    setIsActive(!isActive);
  }

  return (
    <div className="drop-down-button" onClick={dropDownHandelr}>
      {iconLeft && <img src={iconLeft} alt="icon" />}
      <p>{text}</p>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_75_109)">
          <path d="M7 10L12 15L17 10H7Z" fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_75_109">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {isActive && (
        <DropDownList citiesList={dropDownList} pickCity={getElement} button />
      )}
    </div>
  );
};

export default DropDownButton;
