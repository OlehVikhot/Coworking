import "./ButtonText.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { ReactEventHandler } from "react";

const ButtonText: React.FC<{
  text: string;
  disabled?: boolean;
  icon?: boolean;
  onClick?: ReactEventHandler;
}> = ({ text, disabled, icon, onClick }) => {
  let btnClass = "text-button-active";

  if (disabled) {
    btnClass = `text-button-disabled`;
  }

  return (
    <button className={btnClass} onClick={onClick}>
      {icon ? <AiOutlinePlus /> : ""}
      {text}
    </button>
  );
};

export default ButtonText;
