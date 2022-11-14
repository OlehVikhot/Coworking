import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";

import ButtonPrimary from "../UI/ButtonPrimary";
import DropDownButton from "../UI/DropDownButton";
import SignUpModal from "../UI/SignUpModal";
import NeedBookModal from "./NeedBookModal";
import LogInModal from "../UI/LogInModal";
import BookModal from "./BookModal";
import BookInfoModal from "./BookInfoModal";

import "./Booking.scss";

const TYPE_OF_RENT = [
  "Hot Desk",
  "Private office",
  "Meeting room",
  "Virtual Offices",
];

const AMOUNT_PERSONS = [
  "1 person",
  "2 persons",
  "3-4 persons",
  "5-9 persons",
  "10-19 persons",
  "20-99 persons",
  "100+ persons",
];

const RENT_TIME = ["1 day", "1 week", "1 month"];

const Booking = () => {
  const userData = useSelector((state: RootState) => state.user.userData);

  const [isVisible, setIsVisible] = useState(false);
  const [modalType, setModalType] = useState(
    userData.email ? "BookModal" : "NeedBookModal"
  );

  function chooseNextStep(type: string) {
    setModalType(type);
  }

  let content;
  switch (modalType) {
    case "NeedBookModal":
      content = isVisible && (
        <NeedBookModal
          onClick={() => setIsVisible(!isVisible)}
          chooseNextStep={chooseNextStep}
        />
      );
      break;
    case "SignUpModal":
      content = isVisible && (
        <SignUpModal
          onClick={() => setIsVisible(!isVisible)}
          chooseNextStep={chooseNextStep}
        />
      );
      break;
    case "LogInModal":
      content = isVisible && (
        <LogInModal
          onClick={() => setIsVisible(!isVisible)}
          chooseNextStep={chooseNextStep}
        />
      );
      break;
    case "BookModal":
      content = isVisible && (
        <BookModal
          onClick={() => setIsVisible(!isVisible)}
          chooseNextStep={chooseNextStep}
        />
      );
      break;
    case "BookInfoModal":
      content = isVisible && (
        <BookInfoModal onClick={() => setIsVisible(!isVisible)} />
      );
      break;
  }

  const [bookType, setBookType] = useState("Type of rent");
  const [persons, setPersons] = useState("Persons");
  const [rentTime, setRentTime] = useState("Rent time");

  const [price, setPrice] = useState(0);

  function getTypeElement(element: string) {
    setBookType(element);
  }
  function getPersonsElement(element: string) {
    setPersons(element);
  }
  function getRentTimeElement(element: string) {
    setRentTime(element);
  }

  useEffect(() => {
    function calculatePrice(
      bookType: string,
      persons: string,
      rentTime: string
    ) {
      let time = 1;
      if (rentTime === "1 day") {
        time = 1;
      }
      if (rentTime === "1 week") {
        time = 6;
      }
      if (rentTime === "1 month") {
        time = 20;
      }

      setPrice(parseFloat(persons) * 250 * time);
    }
    calculatePrice(bookType, persons, rentTime);
  }, [bookType, persons, rentTime]);

  return (
    <>
      <section className="booking-section">
        <div className="type-rent">
          <DropDownButton
            text={bookType}
            dropDownList={TYPE_OF_RENT}
            getElement={getTypeElement}
          />
        </div>
        <div>
          <DropDownButton
            text={persons}
            dropDownList={AMOUNT_PERSONS}
            getElement={getPersonsElement}
          />
        </div>
        <div>
          <DropDownButton
            text={rentTime}
            dropDownList={RENT_TIME}
            getElement={getRentTimeElement}
          />
        </div>

        <p>{price ? `${price} UAH` : `XX.XX UAH`}</p>
        <ButtonPrimary
          text="Book now"
          onClick={() => setIsVisible(!isVisible)}
        />
      </section>
      {content}
    </>
  );
};

export default Booking;
