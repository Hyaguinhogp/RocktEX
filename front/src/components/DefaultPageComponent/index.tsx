import { ReactNode, useState } from "react";
import { DefaultPage } from "../../styles/global";
import { AnimatePresence } from "framer-motion";
import Dropdown from "../Dropdown";
import Navbar from "../Navbar";
import { FalseNavbar } from "./styles";
import DesktopDropdown from "../DesktopDropdown";

interface IDefaultPageComponent {
    children: ReactNode
}

const DefaultPageComponent = ( { children }: IDefaultPageComponent ) => {

    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [isDesktopDropdownActive, setIsDesktopDropdownActive] = useState(false);

    const activeDropdown = () => {
        setIsDropdownActive(true);
    }

    const desactiveDropdown = () => {
        setIsDropdownActive(false);
    }

    const activeDesktopDropdown = () => {
        setIsDesktopDropdownActive(true);
    }

    const desactiveDesktopDropdown = () => {
        setIsDesktopDropdownActive(false);
    }

    return (
        <DefaultPage>
            <AnimatePresence>   
                {isDropdownActive && <Dropdown desactiveDropdown={desactiveDropdown} />}
            </AnimatePresence>
            <FalseNavbar />
            <Navbar activeDropdown={activeDropdown} activeDesktopDropdown={activeDesktopDropdown} />
            <AnimatePresence>
                {isDesktopDropdownActive && <DesktopDropdown desactiveDesktopDropdown={desactiveDesktopDropdown} />}
            </AnimatePresence>
            {children}
        </DefaultPage>
    )
}

export default DefaultPageComponent;