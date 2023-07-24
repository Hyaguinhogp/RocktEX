import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const NavbarContainer = styled(DefaultContainer)`
    position: fixed;
    flex-direction: column;
    z-index: 5;
    top: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #1D1F21F0;
    backdrop-filter: blur(15px);
`

export const NavbarContent = styled(DefaultContent)`
    display: flex;
    color: white;

    .mobile_navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .navbar_logo {
        width: 30px;
        height: 30px;
        margin: 0;
    }
    .navbar_logo::after {
        position: relative;
        content: "";
        right: 17px;
        color: var(--theme-01);
        z-index: -1;
    }

    span {
        color: var(--theme-03);
        font-weight: 600;
    }

    svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
        color: white;
    }

    .desktop_navbar {
        display: none;
    }

    .selected {
        color: var(--theme-01);
        font-weight: 500;
    }

    @media (min-width: 1200px) {
        .mobile_navbar {
            display: none;
        }

        .desktop_navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .mid_navbar {
            display: flex;
            width: 30%;
            justify-content: space-between;
        }

        a {
            color: white;
            text-decoration: none;
            font-weight: 300;
        }

        .search-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            padding: 0 15px;
            border-radius: 4px;
            background-color: rgb(0, 0, 0, 0.1);

            svg {
                width: 25px;
                height: 25px;
                color: white;
            }
        }

        .icons-container {
            display: flex;
            gap: 20px;
        }

        .search {
            height: 100%;
            background-color: transparent;
            color: white;
            outline: 0;
            font-weight: 300;
        }

        .search::placeholder {
            color: var(--grey-04);
        }
    }
`