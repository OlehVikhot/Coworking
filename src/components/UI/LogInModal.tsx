import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/userSlice";
import { Modal } from "../../types/Types";
import AuthInput from "../ItemPage/AuthInput";
import ModalWindow from "../layout/ModalWindow";
import ButtonPrimary from "./ButtonPrimary";
import "./LogInModal.scss";
import ModalButtons from "./Modal/ModalButtons";
import ModalTitle from "./Modal/ModalTitle";
import ModalWrapper from "./Modal/ModalWrapper";

const LogInModal: React.FC<Modal> = ({ onClick, chooseNextStep }) => {
  const dispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function signUpPerson() {
    if (
      emailRef.current?.value === "" ||
      !emailRef.current?.value.includes("@") ||
      !emailRef.current?.value.includes(".")
    ) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (
      passwordRef.current?.value === "" ||
      passwordRef.current?.value.length! < 8
    ) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    if (!emailError && !passwordError) {
      dispatch(
        signUp({
          email: emailRef.current?.value!,
          password: passwordRef.current?.value!,
        })
      );
      console.log({
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      onClick();
    }
  }
  return (
    <ModalWindow onClick={onClick}>
      <div className="login-modal">
        <ModalWrapper>
          <ModalTitle>Log In</ModalTitle>
          <form className="inputs-container">
            <AuthInput
              labelText="Email"
              type={"email"}
              getText={emailRef}
              error={emailError}
            />
            <AuthInput
              labelText="Password"
              type={"password"}
              getText={passwordRef}
              error={passwordError}
            />
          </form>
          <ModalButtons>
            <ButtonPrimary
              text="Sign Up"
              secondary
              onClick={() => chooseNextStep("SignUpModal")}
            />
            <ButtonPrimary text="Log In" onClick={signUpPerson} />
          </ModalButtons>
        </ModalWrapper>
      </div>
    </ModalWindow>
  );
};

export default LogInModal;
