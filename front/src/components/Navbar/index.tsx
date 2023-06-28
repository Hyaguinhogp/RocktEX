import { NavbarContainer, NavbarContent } from "./styles";
import { CiMenuBurger } from "react-icons/ci";

interface INavbarProps {
    activeDropdown: () => void
}

const Navbar = ({ activeDropdown }: INavbarProps) => {
    return(
        <NavbarContainer>
            <NavbarContent>
                <div>
                    <h2 className="navbar_logo">Rockt<span>EX</span></h2>
                </div>
                <div>
                    <CiMenuBurger onClick={() => activeDropdown()} />
                </div>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar;