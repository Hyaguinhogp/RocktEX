import { useContext, useEffect, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { confirmationModalContext } from "../../contexts/ConfirmationModalContext";
import { userContext } from "../../contexts/UserContext";
import Search from "../Search";
import { DropdownContainer, DropdownContent } from "./styles";

interface IDropdownProps {
    desactiveDropdown: () => void
}

const Dropdown = ({ desactiveDropdown }: IDropdownProps) => {

    const { user, exit } = useContext(userContext);
    const { createConfirmationModal } = useContext(confirmationModalContext);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const exitModalProps = {
        title: "Sair",
        text: "Tem certeza que deseja sair?",
        confirm: "Sair",
        deny: "voltar"
    }

    useEffect(() => {
        document.body.classList.add("modal_active");

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                desactiveDropdown();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.body.classList.remove("modal_active");
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    const animations = {
        initial: {
            x: "200px"
        },
        animate: {
            x: "0px"
        },
        exit: {
            x: "100%"
        },
        transition: {
            duration: 0.3
        }
    }

    return (
        <DropdownContainer>
            <DropdownContent ref={dropdownRef} {...animations}>
                <div className="close-container">
                    <IoIosCloseCircle className="close-button" onClick={() => desactiveDropdown()}/>
                </div>
                <Search isMobile/>
                <div className="options-container">
                    <div className="suboptions-container suboptions-line">
                        <h3 className="selected">Home</h3>
                        <h3>Tecnologia</h3>
                        <h3>Games</h3>
                    </div>
                    <div className="suboptions-container suboptions-line">
                        <h3>Destaques</h3>
                        <h3>Promoções</h3>
                        <h3>Mais lidos</h3>
                    </div>
                    <div className="suboptions-container">
                        {Object.keys(user).length > 0 ?
                            <>
                                <h3>Perfil</h3>
                                <h3 onClick={() => createConfirmationModal(exitModalProps, exit)}>Sair</h3>
                            </>
                            :
                            <>
                                <Link to="/register">Cadastre-se</Link>
                                <Link to="/login">Login</Link>
                                <Link to="/profile">Perfil</Link>
                            </>
                        }
                    </div>
                </div>
            </DropdownContent>
        </DropdownContainer>
    )
}

export default Dropdown