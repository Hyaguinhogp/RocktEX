import { DropdownContainer, DropdownContent } from "./styles"
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io"
import { useContext, useEffect } from "react"
import { motion } from "framer-motion"
import { userContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

interface IDropdownProps {
    desactiveDropdown: () => void
}

const Dropdown = ({ desactiveDropdown }: IDropdownProps) => {

    const { user } = useContext(userContext);

    useEffect(() => {
        document.body.classList.add("modal_active");

        return () => {
            document.body.classList.remove("modal_active");
        }
    }, []);

    return (
        <DropdownContainer>
            <DropdownContent initial={{ x: "200px" }} animate={{ x: "0px" }} exit={{ x: "100%" }} transition={{ duration: 0.3 }}>
                <div className="close-container">
                    <IoIosCloseCircle className="close-button" onClick={() => desactiveDropdown()} />
                </div>
                <div className="search-container">
                    <input type="text" className="search" placeholder="Pesquisar..." />
                    <button className="search-button">
                        <CiSearch />
                    </button>
                </div>
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
                                <h3>Sair</h3>
                            </>
                            :
                            <>
                                <Link to="/register">Cadastre-se</Link>
                                <Link to="/login">Login</Link>
                            </>
                        }
                    </div>
                </div>
            </DropdownContent>
        </DropdownContainer>
    )
}

export default Dropdown