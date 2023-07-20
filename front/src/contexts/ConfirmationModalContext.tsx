import { createContext, ReactNode, useState } from "react"

interface IConfirmationModalData {
    isActive: boolean
    modalInfo: IConfirmationModal
    createConfirmationModal: (modal: IConfirmationModal, confirmFunction: () => void | undefined) => void
    action: (() => void) | undefined | null
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
    const [modalInfo, setModalInfo] = useState<IConfirmationModal>({} as IConfirmationModal)
    const [action, setAction] = useState<(() => void) | undefined | null>();

    const createConfirmationModal = (modal: IConfirmationModal, confirmFunction: () => void) => {
        setModalInfo(modal);
        setAction(confirmFunction);
        setIsActive(true);
    }

    const closeModal = () => {
        setIsActive(false);
    }

    return (
        <confirmationModalContext.Provider value={{ isActive, modalInfo, createConfirmationModal, action, closeModal }}>
            {children}
        </confirmationModalContext.Provider>
    )
}