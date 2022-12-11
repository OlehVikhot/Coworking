import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadData } from "../../store/dataSlice";
import { loadUser } from "../../store/userSlice";
import { ButtonPrimary, Footer } from "../../components";
import { fetchData } from "../../util/fetchData";
import "../../assets/fonts/DidactGothic-Regular.ttf";
import "./Layout.scss";

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState<string>("");

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setIsLoading(true);
    try {
      (async () => {
        const res = await fetchData().catch((err) => {
          if (err.response.status === 404) {
            setIsError(err.code);
            throw new Error(`${err.config.url} not found`);
          }
          throw err;
        });

        dispatch(loadData(res.data));
      })();

      setIsLoading(false);
    } catch (err: any) {
      setIsError(err);
    }
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      {!error && !isLoading ? (
        <div className='layout'>
          {children}
          <Footer />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "1000px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            fontSize: "20px",
          }}
        >
          <h1>Error, please try again</h1>
          <div>
            <ButtonPrimary
              text='Try again'
              onClick={() => window.location.reload()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
