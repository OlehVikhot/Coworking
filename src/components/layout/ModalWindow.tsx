import { ReactNode } from "react";
import getIcon from "../../constants/icons";
import "./ModalWindow.scss";

const ModalWindow: React.FC<{
  children: ReactNode;
  onClick: () => void;
}> = ({ children, onClick }) => {
  return (
    <div className="overlay" onClick={onClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="icon" onClick={onClick}>
          {getIcon("close")}
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
