import {
  ModalWindow,
  ButtonPrimary,
  ModalButtons,
  ModalTitle,
  ModalWrapper,
} from "../../../components";
import getIcon from "../../../constants/icons";
import "./BookInfoModal.scss";

export const BookInfoModal: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <ModalWindow onClick={onClick}>
      <div className='book-modal-info'>
        <ModalWrapper>
          <ModalTitle>Booking Info</ModalTitle>
          <div className='inputs-container'>
            <div className='info-block'>
              <div className='filed'>
                {getIcon("location")}
                <p>Communa, Lviv</p>
              </div>
              <div className='filed'>
                {getIcon("person")}
                <p>1 person</p>
              </div>
              <div className='filed'>
                {getIcon("calendar")}
                <p>12.03.22 - 12.03.22</p>
              </div>
              <div className='filed'>
                {getIcon("coworkingType")}
                <p>Hot Desk</p>
              </div>

              <div className='amount'>
                <p>Days 1 x 250 uah</p>
                <p>250.0 uah</p>
              </div>
            </div>
            <div className='total-amount'>
              <p>Total price</p>
              <p>250.0 uah</p>
            </div>
          </div>
          <ModalButtons>
            <ButtonPrimary text='Check out' />
          </ModalButtons>
        </ModalWrapper>
      </div>
    </ModalWindow>
  );
};
