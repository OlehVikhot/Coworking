import ButtonPrimary from "../UI/ButtonPrimary";
import InputSearch from "../UI/InputSearch";
import logo from "../../assets/logo.svg";
import "./NavigationBar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LogInModal from "../UI/LogInModal";
import SignUpModal from "../UI/SignUpModal";
import { RootState } from "../../store/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/userSlice";

const NavigationBar: React.FC<{ search?: boolean }> = ({ search }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalType, setModalType] = useState("NeedBookModal");

  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.userData);

  function chooseNextStep(type: string) {
    setModalType(type);
  }

  let content = (
    <LogInModal
      onClick={() => setIsVisible(!isVisible)}
      chooseNextStep={chooseNextStep}
    />
  );

  switch (modalType) {
    case "SignUpModal":
      content = (
        <SignUpModal
          onClick={() => setIsVisible(!isVisible)}
          chooseNextStep={chooseNextStep}
        />
      );
      break;
    case "LogInModal":
      content = (
        <LogInModal
          onClick={() => setIsVisible(!isVisible)}
          chooseNextStep={chooseNextStep}
        />
      );
      break;
  }

  return (
    <nav className="navbar">
      {isVisible && content}
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      {search && (
        <div className="search">
          <InputSearch
            placeholder={"Choose city"}
            getText={() => {}}
            navigation
          />
        </div>
      )}
      {!userData.email ? (
        <ButtonPrimary
          text="Log in"
          secondary
          onClick={() => setIsVisible(true)}
        />
      ) : (
        <div className="user">
          <img
            style={{ width: "50px", borderRadius: "200px" }}
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="profile"
          />
          <p>Alex</p>
          <ButtonPrimary
            text="Log Out"
            secondary
            onClick={() => {
              setIsVisible(false);
              dispatch(logOut());
            }}
          />
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
