import "../../assets/fonts/DidactGothic-Regular.ttf";
import "./Layout.scss";
import Footer from "./Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "../../store/dataSlice";
import { DUMMY_DATA } from "../../util/DATA";
import { loadUser } from "../../store/userSlice";

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData(DUMMY_DATA));
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="layout">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
