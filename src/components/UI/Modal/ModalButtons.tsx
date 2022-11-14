import { ReactNode } from "react";
import "./ModalButtons.scss";

const ModalButtons: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="modal-buttons">{children}</div>;
};

export default ModalButtons;
