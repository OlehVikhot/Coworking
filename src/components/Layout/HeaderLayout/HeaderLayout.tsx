import { ReactElement } from "react";
import "./HeaderLayout.scss";

export const HeaderLayout: React.FC<{
  children: ReactElement | ReactElement[];
}> = ({ children }) => {
  return <header className='header-layout'>{children}</header>;
};
