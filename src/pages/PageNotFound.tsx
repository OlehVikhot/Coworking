import { useEffect } from "react";
import { redirect } from "react-router-dom";
import NavigationBar from "../components/layout/NavigationBar";
import "./PageNotFound.scss";

const PageNotFound = () => {
  useEffect(() => {
    redirect("/");
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="page-not-found">
        <h1>NOT FOUND</h1>
      </div>
    </>
  );
};

export default PageNotFound;
