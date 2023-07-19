import { useState } from "react";
import { NavbarContainer, NavbarContent } from "./styles";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { ImRocket } from "react-icons/im"
import { useNavigate } from "react-router-dom";

interface INavbarProps {
    activeDropdown: () => void
}

const Navbar = ({ activeDropdown }: INavbarProps) => {

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
                        <a className="selected" href="">HOME</a>
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