import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const NavbarContainer = styled(DefaultContainer)`
    position: fixed;
    z-index: 5;
    top: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: var(--theme-04);
`

export const NavbarContent = styled(DefaultContent)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


    .navbar_logo {
        font: var(--Heading-5-300);
        color: white;
    }
    .navbar_logo::after {
        position: relative;
        content: "X";
        right: 17px;
        color: var(--theme-01);
        z-index: -1;
    }

    span {
        color: var(--theme-03);
        font-weight: 600;
    }

    svg {
        height: 20px;
        margin-left: 20px;
        cursor: pointer;
    }
`