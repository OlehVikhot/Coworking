import { ReactNode } from "react";
import "./ModalWrapper.scss";

const ModalWrapper: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <div className="modal-wrapper">{children}</div>;
};

export default ModalWrapper;
