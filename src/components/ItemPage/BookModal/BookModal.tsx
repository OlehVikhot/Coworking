import React, { useRef, useState } from "react";
import {
  ModalWindow,
  ButtonPrimary,
  AuthInput,
  ModalWrapper,
  ModalTitle,
  ModalButtons,
} from "../../../components";
import { Modal } from "../../../types/Types";
import { TYPE_OF_RENT, AMOUNT_PERSONS, RENT_TIME } from "../../../util/DATA";
import flag from "../../../assets/icons/ukraine.svg";
import person from "../../../assets/icons/person.svg";
import "./BookModal.scss";

export const BookModal: React.FC<Modal> = ({ onClick, chooseNextStep }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const peopleRef = useRef<HTMLInputElement>(null);
  const rentTypeRef = useRef<HTMLInputElement>(null);

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [peopleError, setPeopleError] = useState(false);
  const [rentTypeError, setRentTypeError] = useState(false);

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
    if (dateRef.current?.value === "") {
      setDateError(true);
    } else {
      setDateError(false);
    }
    if (peopleRef.current?.value === "") {
      setPeopleError(true);
    } else {
      setPeopleError(false);
    }
    if (rentTypeRef.current?.value === "") {
      setRentTypeError(true);
      return;
    } else {
      setRentTypeError(false);
    }

    if (
      !nameError &&
      !phoneError &&
      !emailError &&
      !dateError &&
      !peopleError &&
      !rentTypeError
    ) {
      console.log({
        name: nameRef.current?.value,
        phone: phoneRef.current?.value,
        email: emailRef.current?.value,
        date: dateRef.current?.value,
        peoples: peopleRef.current?.value,
        rentType: rentTypeRef.current?.value,
      });
      chooseNextStep("BookInfoModal");
    }
  }

  return (
    <ModalWindow onClick={onClick}>
      <div className='book-modal'>
        <ModalWrapper>
          <ModalTitle>Registration</ModalTitle>
          <form className='inputs-container'>
            <AuthInput
              labelText='Full name'
              getText={nameRef}
              error={nameError}
            />
            <AuthInput
              labelText='Date'
              type={"date"}
              getText={dateRef}
              error={dateError}
            />
            <AuthInput
              labelText='Phone number'
              iconLeft={flag}
              type={"number"}
              getText={phoneRef}
              error={phoneError}
            />
            <AuthInput
              labelText='Peoples'
              type={"text"}
              dropdownList={AMOUNT_PERSONS}
              iconLeft={person}
              getText={peopleRef}
              error={peopleError}
            />
            <AuthInput
              labelText='Email'
              type={"email"}
              getText={emailRef}
              error={emailError}
            />
            <AuthInput
              labelText='Rent Type'
              dropdownList={TYPE_OF_RENT}
              getText={rentTypeRef}
              error={rentTypeError}
            />
          </form>
          <ModalButtons>
            <ButtonPrimary text='Check out' onClick={signUpPerson} />
          </ModalButtons>
        </ModalWrapper>
      </div>
    </ModalWindow>
  );
};
