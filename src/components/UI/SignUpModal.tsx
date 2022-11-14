import { useEffect, useRef, useState } from "react";

import { Modal } from "../../types/Types";

import AuthInput from "../ItemPage/AuthInput";
import ButtonPrimary from "./ButtonPrimary";
import ModalWindow from "../layout/ModalWindow";
import ModalWrapper from "./Modal/ModalWrapper";
import ModalTitle from "./Modal/ModalTitle";
import ModalButtons from "./Modal/ModalButtons";

import flag from "../../assets/icons/ukraine.svg";

import "./SignUpModal.scss";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/userSlice";

const SignUpModal: React.FC<Modal> = ({ onClick, chooseNextStep }) => {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function signUpPerson() {
    if (nameRef.current?.value === "" || nameRef.current?.value.length! < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (
      phoneRef.current?.value === "" ||
      phoneRef.current?.value.length! < 10
    ) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
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

    // console.log(nameError);
    // console.log(nameRef.current?.value);

    if (!nameError && !phoneError && !emailError && !passwordError) {
      dispatch(
        signUp({
          name: nameRef.current?.value!,
          phone: phoneRef.current?.value!,
          email: emailRef.current?.value!,
          password: passwordRef.current?.value!,
        })
      );
      console.log({
        name: nameRef.current?.value,
        phone: phoneRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      onClick();
    }
  }

  return (
    <ModalWindow onClick={onClick}>
      <div className="signup-modal">
        <ModalWrapper>
          <ModalTitle>Registration</ModalTitle>
          <form className="inputs-container">
            <AuthInput
              labelText="Full name"
              getText={nameRef}
              error={nameError}
            />
            <AuthInput
              labelText="Phone number"
              iconLeft={flag}
              type={"number"}
              getText={phoneRef}
              error={phoneError}
            />
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
            <ButtonPrimary text="Sign Up" onClick={signUpPerson} />
            <ButtonPrimary
              text="Log In"
              secondary
              onClick={() => chooseNextStep("LogInModal")}
            />
          </ModalButtons>
        </ModalWrapper>
      </div>
    </ModalWindow>
  );
};

export default SignUpModal;
