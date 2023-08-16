import { CiMenuBurger, CiSearch, CiUser } from "react-icons/ci";
import { ImRocket } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { NavbarContainer, NavbarContent } from "./styles";

export type TDesktopDropdown = "notice" | "tech" | "games" | "search";

interface INavbarProps {
    activeDropdown: () => void
    activeDesktopDropdown: (type: TDesktopDropdown) => void
}

const Navbar = ({ activeDropdown, activeDesktopDropdown }: INavbarProps) => {

    const navigate = useNavigate();

    return (
        <NavbarContainer>
            <NavbarContent>
                <div className="mobile_navbar">
                    <div>
                        <ImRocket className="navbar_logo" onClick={() => navigate("/home")} />
                    </div>

                    <CiMenuBurger onClick={() => activeDropdown()} />
                </div>

                <div className="desktop_navbar">
                    <div>
                        <ImRocket className="navbar_logo" onClick={() => navigate("/home")} />
                    </div>

                    <div className="mid_navbar">
                        <h3 onMouseOver={() => activeDesktopDropdown("notice")}>NOTICIAS</h3>
                        <h3 onMouseOver={() => activeDesktopDropdown("tech")}>TECNOLOGIA</h3>
                        <h3 onMouseOver={() => activeDesktopDropdown("games")}>JOGOS</h3>
                    </div>
                    
                    <div className="icons-container">
                        <CiSearch onMouseOver={() => activeDesktopDropdown("search")}/>
                        <CiUser onClick={() => navigate("/profile")} />
                    </div>
                </div>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar;