import { NavbarContainer, NavbarContent } from "./styles";
import { CiSearch } from "react-icons/ci";
import { AiOutlineBars } from "react-icons/ai";
import { ReactComponent as Search } from "../../assets/search_icon.svg";
import { ReactComponent as DropdownButton } from "../../assets/dropdown_button.svg";

const Navbar = () => {
    return(
        <NavbarContainer>
            <NavbarContent>
                <div>
                    <h2 className="navbar_logo">Rockt<span>EX</span></h2>
                </div>
                <div>
                    <Search />
                    <DropdownButton />
                </div>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar;