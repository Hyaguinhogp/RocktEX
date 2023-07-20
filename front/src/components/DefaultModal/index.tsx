import { ReactNode, useEffect } from "react";
import { DefaultModalContainer } from "./styles";

interface IDefaultModalProps {
    children: ReactNode
}

const DefaultModal = ({ children }: IDefaultModalProps) => {

    useEffect(() => {
        document.body.classList.add("modal_active");

        return () => {
            document.body.classList.remove("modal_active");
        }
    }, []);

    return (
        <DefaultModalContainer>
            {children}
        </DefaultModalContainer>
    )
}

export default DefaultModal;