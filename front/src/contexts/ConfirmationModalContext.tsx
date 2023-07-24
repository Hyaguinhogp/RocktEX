import { createContext, ReactNode, useState } from "react"

interface IConfirmationModalData {
    isActive: boolean
    modalInfo: IConfirmationModal
    createConfirmationModal: (modal: IConfirmationModal, confirmFunction: () => void | undefined) => void
    closeModal: () => void
}

interface IConfirmationModalProps {
    children: ReactNode
}

interface IConfirmationModal {
    title: string
    text: string
    confirm?: string
    deny?: string
}

export const confirmationModalContext = createContext<IConfirmationModalData>({} as IConfirmationModalData)

export const ConfirmationModalProvider = ({ children }: IConfirmationModalProps) => {

    const [isActive, setIsActive] = useState(false);
    const [modalInfo, setModalInfo] = useState<IConfirmationModal>({} as IConfirmationModal);
    const [confirmFuncion, setConfirmFunction] = useState<() => void>();

    const createConfirmationModal = (modal: IConfirmationModal, confirmFunction: () => void | undefined) => {
        setModalInfo(modal);
        setConfirmFunction(confirmFunction);
        setIsActive(true);
    }

    const closeModal = () => {
        setIsActive(false);
    }

    const confirmAction = () => {
        confirmFuncion!();
        closeModal();
    }

    return (
        <confirmationModalContext.Provider value={{ isActive, modalInfo, createConfirmationModal, closeModal }}>
            {children}
        </confirmationModalContext.Provider>
    )
}