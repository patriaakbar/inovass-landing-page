import { Modal } from "./Modal";
import modalSuccess from "../assets/company/modal-success.png";

export const ModalSuccess = ({ isOpen, closeModal, textCloseButton = "Close", children }) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="text-center">
        <img src={modalSuccess} alt="" className="w-32 mx-auto" />
        <span className="inline-block my-4 text-lg font-medium">{children}</span>
        <button className="w-full py-4 text-white transition-colors rounded-full bg-primary hover:bg-primary-600" onClick={closeModal}>
          Close
        </button>
      </div>
    </Modal>
  );
};
