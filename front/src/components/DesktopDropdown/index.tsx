import { DesktopDropdownContainer, DesktopDropdownContent } from "./styles";

interface IDesktopDropdownProps {
    desactiveDesktopDropdown: () => void
}

const DesktopDropdown = ({ desactiveDesktopDropdown }: IDesktopDropdownProps) => {

    const animations = {
        initial: {
            y: "-200px"
        },
        animate: {
            y: "0px"
        },
        exit: {
            y: "-200px"
        },
        transition: {
            duration: 0.3
        }
    }

    return (
        <DesktopDropdownContainer {...animations} onMouseLeave={() => desactiveDesktopDropdown()}>
            <DesktopDropdownContent>
                <h3>Últimas notícias</h3>
                <h3>Em destaque</h3>
                <h3>Mais lidos</h3>
            </DesktopDropdownContent>
        </DesktopDropdownContainer>
    )
}

export default DesktopDropdown;