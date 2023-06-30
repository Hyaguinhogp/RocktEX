import { useState } from "react";
import { NavbarContainer, NavbarContent } from "./styles";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

interface INavbarProps {
    activeDropdown: () => void
}

const Navbar = ({ activeDropdown }: INavbarProps) => {

    const [isDesktopActive, setIsDesktopActive] = useState(false);

    return (
        <NavbarContainer>
            <NavbarContent>
                <div className="mobile_navbar">
                    <div>
                        <h2 className="navbar_logo">Rockt<span>EX</span></h2>
                    </div>

                    <CiMenuBurger onClick={() => activeDropdown()} />
                </div>

                <div className="desktop_navbar">
                    <div>
                        <h2 className="navbar_logo">Rockt<span>EX</span></h2>
                    </div>

                    <div className="mid_navbar">
                        <a href="">HOME</a>
                        <a href="">TECNOLOGIA</a>
                        <a href="">JOGOS</a>
                    </div>
                    
                    <div className="search-container">
                        <input type="text" className="search" placeholder="Pesquisar..." />
                        <CiSearch />
                    </div>
                </div>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar;