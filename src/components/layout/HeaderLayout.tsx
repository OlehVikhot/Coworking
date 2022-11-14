import { ReactElement } from "react";
import "./HeaderLayout.scss";

const HeaderLayout: React.FC<{ children: ReactElement | ReactElement[] }> = ({
  children,
}) => {
  return <header className="header-layout">{children}</header>;
};

export default HeaderLayout;
