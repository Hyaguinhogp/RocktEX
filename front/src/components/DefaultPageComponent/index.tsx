import { ReactNode, useState } from "react";
import { DefaultPage } from "../../styles/global";
import { AnimatePresence } from "framer-motion";
import Dropdown from "../Dropdown";
import Navbar, { TDesktopDropdown } from "../Navbar";
import { FalseNavbar } from "./styles";
import DesktopDropdown from "../DesktopDropdown";

interface IDefaultPageComponent {
    children: ReactNode
}

const DefaultPageComponent = ( { children }: IDefaultPageComponent ) => {

    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [isDesktopDropdownActive, setIsDesktopDropdownActive] = useState(false);
    const [typeDesktopDropdown, setTypeDesktopDropdown] = useState<TDesktopDropdown>("notice")

    const activeDropdown = () => {
        setIsDropdownActive(true);
    }
    
    const desactiveDropdown = () => {
        setIsDropdownActive(false);
    }
    
    const activeDesktopDropdown = (type: TDesktopDropdown) => {
        setIsDesktopDropdownActive(true);
        setTypeDesktopDropdown(type);
    }

    const desactiveDesktopDropdown = () => {
        setIsDesktopDropdownActive(false);
    }

    return (
        <DefaultPage>
            <AnimatePresence>   
                {isDropdownActive && <Dropdown desactiveDropdown={desactiveDropdown} />}
            </AnimatePresence>
            <Navbar activeDropdown={activeDropdown} activeDesktopDropdown={activeDesktopDropdown} />
            <AnimatePresence>
                {isDesktopDropdownActive && <DesktopDropdown desactiveDesktopDropdown={desactiveDesktopDropdown} type={typeDesktopDropdown} />}
            </AnimatePresence>
            {children}
        </DefaultPage>
    )
}

export default DefaultPageComponent;