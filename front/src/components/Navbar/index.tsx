import { NavbarContainer, NavbarContent } from "./styles";
import { ReactComponent as Search } from "../../assets/search_icon.svg";
import { ReactComponent as DropdownButton } from "../../assets/dropdown_button.svg";
import { useSelector } from "react-redux";

const Navbar = () => {

    const dropDownState = useSelector((state: any) => state.dropDown)

    return(
        <NavbarContainer>
            <NavbarContent>
                <div>
                    <h2 className="navbar_logo">Rockt<span>EX</span></h2>
                </div>
                <div>
                    {dropDownState}
                    <Search />
                    <DropdownButton />
                </div>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar;