import { ReactNode, useContext } from "react";
import { DefaultConfirmationModal } from "./styles";
import DefaultModal from "../DefaultModal";
import { GrFormClose } from "react-icons/gr"
import { confirmationModalContext } from "../../contexts/ConfirmationModalContext";

const ConfirmationModal = () => {

    const { modalInfo, action, closeModal } = useContext(confirmationModalContext);
    const { title, text, confirm, deny } = {...modalInfo};
    const handleConfirm = () => {
        console.log("opa");
        action!();
        closeModal();
    }

    return (
        <DefaultModal>
            <DefaultConfirmationModal>
                <div className="modal-top-container">
                    <h2 className="modal-title">{title ? title : "Confirmação"}</h2>
                    <GrFormClose onClick={() => closeModal()} />
                </div>

                <h3 className="modal-text">{text ? title : "Tem certeza dessa ação?"}</h3>

                <div className="modal-bottom-container">
                    <button className="deny" onClick={() => closeModal()}>{deny ? deny : "voltar"}</button>
                    <button className="confirm" onClick={() => handleConfirm()}>{confirm ? confirm : "Confirmar"}</button>
                </div>
            </DefaultConfirmationModal>
        </DefaultModal>
    )
}

export default ConfirmationModal;