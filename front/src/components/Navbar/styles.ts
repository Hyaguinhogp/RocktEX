import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const NavbarContainer = styled(DefaultContainer)`
    padding-top: 15px;
    padding-bottom: 15px;
    box-shadow: 2px 2px 20px var(--grey-05);
    z-index: 5;
    
`

export const NavbarContent = styled(DefaultContent)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


    .navbar_logo {
        font: var(--Heading-5-300);
    }
    .navbar_logo::after {
        position: relative;
        content: "X";
        right: 17px;
        color: var(--theme-01);
        z-index: -1;
    }

    span {
        color: var(--theme-02);
    }

    svg {
        height: 20px;
        margin-left: 20px;
        cursor: pointer;
    }
`