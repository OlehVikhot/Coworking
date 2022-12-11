import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadData } from "../../store/dataSlice";
import { loadUser } from "../../store/userSlice";
import { Footer } from "../../components/index";
import { DUMMY_DATA } from "../../util/DATA";
import "../../assets/fonts/DidactGothic-Regular.ttf";
import "./Layout.scss";

export const Layout: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(loadData(DUMMY_DATA));
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className='layout'>
      {children}
      <Footer />
    </div>
  );
};
