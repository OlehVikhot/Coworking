import { ModalWindow, ButtonText, ButtonPrimary } from "../../../components";
import { Modal } from "../../../types/Types";
import "./NeedBookModal.scss";

export const NeedBookModal: React.FC<Modal> = ({ onClick, chooseNextStep }) => {
  return (
    <ModalWindow onClick={onClick}>
      <div className='needbook-modal'>
        <h3>Booking a coworking</h3>
        <div className='book'>
          <ButtonPrimary
            text='Registration'
            onClick={() => chooseNextStep("SignUpModal")}
          />
          <p>or</p>
          <ButtonText
            text='Book as guest'
            onClick={() => chooseNextStep("BookModal")}
          />
        </div>
      </div>
    </ModalWindow>
  );
};
