import getIcon from "../../constants/icons";
import ModalWindow from "../layout/ModalWindow";
import ButtonPrimary from "../UI/ButtonPrimary";
import ModalButtons from "../UI/Modal/ModalButtons";
import ModalTitle from "../UI/Modal/ModalTitle";
import ModalWrapper from "../UI/Modal/ModalWrapper";
import AuthInput from "./AuthInput";
import "./BookInfoModal.scss";

const BookInfoModal: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <ModalWindow onClick={onClick}>
      <div className="book-modal-info">
        <ModalWrapper>
          <ModalTitle>Booking Info</ModalTitle>
          <div className="inputs-container">
            <div className="info-block">
              <div className="filed">
                {getIcon("location")}
                <p>Комуна, м. Львів</p>
              </div>
              <div className="filed">
                {getIcon("person")}
                <p>1 особа</p>
              </div>
              <div className="filed">
                {getIcon("calendar")}
                <p>12.03.22 - 12.03.22</p>
              </div>
              <div className="filed">
                {getIcon("coworkingType")}
                <p>Hot Desk</p>
              </div>

              <div className="amount">
                <p>Кількість днів 1 х 250 uah</p>
                <p>250.0 uah</p>
              </div>
            </div>
            <div className="total-amount">
              <p>Загальна вартість</p>
              <p>250.0 uah</p>
            </div>
          </div>
          <ModalButtons>
            <ButtonPrimary text="Check out" />
          </ModalButtons>
        </ModalWrapper>
      </div>
    </ModalWindow>
  );
};

export default BookInfoModal;
