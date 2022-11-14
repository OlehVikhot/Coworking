import "./ButtonPrimary.scss";
import { AiOutlinePlus } from "react-icons/ai";

const ButtonPrimary: React.FC<{
  text: string;
  disabled?: boolean;
  icon?: boolean;
  secondary?: boolean;
  onClick?: React.MouseEventHandler;
}> = ({ text, disabled, icon, secondary, onClick }) => {
  let btnClass = "primary-button-active";

  if (secondary) {
    btnClass = "primary-button-secondary";
  }

  if (disabled) {
    btnClass = `primary-button-disabled`;
  }

  return (
    <button className={btnClass} onClick={onClick}>
      {icon ? <AiOutlinePlus /> : ""}
      {text}
    </button>
  );
};

export default ButtonPrimary;
