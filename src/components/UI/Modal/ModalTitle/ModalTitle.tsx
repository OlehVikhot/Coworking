import { ReactNode } from "react";
import "./ModalTitle.scss";

export const ModalTitle: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='modal-title'>
      <h2>{children}</h2>
    </div>
  );
};
