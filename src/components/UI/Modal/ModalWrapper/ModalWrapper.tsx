import { ReactNode } from "react";
import "./ModalWrapper.scss";

export const ModalWrapper: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <div className='modal-wrapper'>{children}</div>;
};
