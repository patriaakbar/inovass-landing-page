import { ModalError } from "./ModalError";
import { ModalSuccess } from "./ModalSuccess";

export const ModalSuccessError = ({ isSuccess, isError, closeModal, successMessage, errorMessage }) => {
  return (
    <>
      <ModalSuccess isOpen={isSuccess} closeModal={closeModal}>
        {successMessage}
      </ModalSuccess>

      <ModalError isOpen={isError} closeModal={closeModal}>
        {errorMessage}
      </ModalError>
    </>
  );
};
