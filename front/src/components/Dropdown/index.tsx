import { DropdownContainer, DropdownContent } from "./styles"
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg"

interface IDropdownProps {
    desactiveDropdown: () => void
}

const Dropdown = ({ desactiveDropdown }: IDropdownProps) => {
    return (
        <DropdownContainer>
            <DropdownContent initial={{ x: "200px" }} animate={{ x: "0px" }} exit={{ x: "100%" }} transition={{ duration: 0.3 }}>
                <div className="close-container">
                    <button className="close-button" onClick={() => desactiveDropdown()}>X</button>
                </div>
                <div className="search-container">
                    <input type="text" className="search" placeholder="Pesquisar..." />
                    <button className="search-button">
                        <SearchIcon />
                    </button>
                </div>
                <div className="options-container">
                    <div className="suboptions-container suboptions-line">
                        <h3>Home</h3>
                        <h3>Tecnologia</h3>
                        <h3>Games</h3>
                    </div>
                    <div className="suboptions-container suboptions-line">
                        <h3>Destaques</h3>
                        <h3>Promoções</h3>
                        <h3>Mais lidos</h3>
                    </div>
                    <div className="suboptions-container">
                        <h3>Perfil</h3>
                        <h3>Sair</h3>
                    </div>
                </div>
            </DropdownContent>
        </DropdownContainer>
    )
}

export default Dropdown