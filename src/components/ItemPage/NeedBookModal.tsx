import ButtonPrimary from "../UI/ButtonPrimary";
import ButtonText from "../UI/ButtonText";
import ModalWindow from "../layout/ModalWindow";
import { Modal } from "../../types/Types";

import "./NeedBookModal.scss";

const NeedBookModal: React.FC<Modal> = ({ onClick, chooseNextStep }) => {
  return (
    <ModalWindow onClick={onClick}>
      <div className="needbook-modal">
        <h3>Booking a coworking</h3>
        <div className="book">
          <ButtonPrimary
            text="Registration"
            onClick={() => chooseNextStep("SignUpModal")}
          />
          <p>or</p>
          <ButtonText
            text="Book as guest"
            onClick={() => chooseNextStep("BookModal")}
          />
        </div>
      </div>
    </ModalWindow>
  );
};

export default NeedBookModal;
