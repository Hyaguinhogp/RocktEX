import { TDesktopDropdown } from "../Navbar";
import Search from "../Search";
import { DesktopDropdownContainer, DesktopDropdownContent } from "./styles";

interface IDesktopDropdownProps {
    desactiveDesktopDropdown: () => void
    type: TDesktopDropdown
}

const DesktopDropdown = ({ desactiveDesktopDropdown, type }: IDesktopDropdownProps) => {

    const animations = {
        initial: {
            y: "-100%"
        },
        animate: {
            y: "0"
        },
        exit: {
            y: "-100%"
        },
        transition: {
            duration: 0.3
        }
    }

    return (
        <DesktopDropdownContainer {...animations} onMouseLeave={() => desactiveDesktopDropdown()}>
            <DesktopDropdownContent>
                {type == "notice" && <div className="desktop-column">
                    <h3>Últimas notícias</h3>
                    <h3>Em destaque</h3>
                    <h3>Mais lidos</h3>
                </div>}

                {type == "tech" && <>
                    <div className="desktop-column">
                        <h3 className="title">Categorias</h3>
                        <h3>Espaço</h3>
                        <h3>Smartphones</h3>
                        <h3>Automobilística</h3>
                        <h3>Ciência</h3>
                        <h3>Eletrodomésticos</h3>
                    </div>

                    <div className="desktop-column">
                        <h3 className="title">Empresas</h3>
                        <h3>Microsoft</h3>
                        <h3>Samsung</h3>
                        <h3>Apple</h3>
                        <h3>Dell</h3>
                        <h3>Acer</h3>
                        <h3>SpaceX</h3>
                        <h3>Tesla</h3>
                        <h3>Apple</h3>
                    </div>
                </>}

                {type == "games" && <>
                    <div className="desktop-column">
                        <h3>Promoções</h3>
                        <h3>Jogos do ano</h3>
                        <h3>Destaque</h3>
                    </div>

                    <div className="desktop-column">
                        <h3 className="title">Plataformas</h3>
                        <h3>Playstation</h3>
                        <h3>XBox</h3>
                        <h3>PC</h3>
                        <h3>Nintendo</h3>
                        <h3>Android/IPhone</h3>
                        <h3>Steam Deck</h3>
                    </div>

                    <div className="desktop-column">
                        <h3 className="title">Desenvolvedores</h3>
                        <h3>Sony</h3>
                        <h3>Microsoft</h3>
                        <h3>Ubisoft</h3>
                        <h3>Nintendo</h3>
                        <h3>Fromsoftware</h3>
                        <h3>EA</h3>
                        <h3>Bethesdha</h3>
                        <h3>Blizzard</h3>
                    </div>

                    <div className="desktop-column">
                        <h3 className="title">Hardware</h3>
                        <h3>Nvidia</h3>
                        <h3>AMD</h3>
                        <h3>Kingston</h3>
                        <h3>ASUS</h3>
                        <h3>Gigabyte</h3>
                    </div>
                </>}

                {type == "search" && <div className="desktop-search">
                        <Search isMobile={false} />
                    </div>}
            </DesktopDropdownContent>
        </DesktopDropdownContainer>
    )
}

export default DesktopDropdown;