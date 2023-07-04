import { ReactNode, useState } from "react";
import { DefaultPage } from "../../styles/global";
import { AnimatePresence } from "framer-motion";
import Dropdown from "../Dropdown";
import Navbar from "../Navbar";

interface IDefaultPageComponent {
    children: ReactNode
}

const DefaultPageComponent = ( { children }: IDefaultPageComponent ) => {

    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const activeDropdown = () => {
        setIsDropdownActive(true);
    }

    const desactiveDropdown = () => {
        setIsDropdownActive(false);
    }

    return (
        <DefaultPage>
            <AnimatePresence>   
                {isDropdownActive && <Dropdown desactiveDropdown={desactiveDropdown} />}
            </AnimatePresence>
            <Navbar activeDropdown={activeDropdown} />
            {children}
        </DefaultPage>
    )
}

export default DefaultPageComponent;