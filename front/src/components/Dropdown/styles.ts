import { motion } from "framer-motion";
import styled from "styled-components";

interface IDropdownContainerProps {
    isDropdownActive: boolean
}

export const DropdownContainer = styled(motion.div)`
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: end;
    width: 100vw;
    height: 100vh;
    top: 0;
    background-color: rgb(0, 0, 0, 0.4);
    `

export const DropdownContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 50px 20px;
    background-color: var(--theme-00);
    color: white;

    .close-container {
        display: flex;
        justify-content: end;
        margin-bottom: 50px;
    }

    .close-button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 0;
        cursor: pointer;
    }

    .search-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 52px;
        padding: 0 15px;
        margin-bottom: 50px;
        border-radius: 4px;
        background-color: rgb(0, 0, 0, 0.5);

        svg {
            width: 25px;
            height: 25px;
        }
    }

    .search {
        height: 100%;
        background-color: transparent;
        color: white;
        outline: 0;
    }

    .search-button {
        background-color: transparent;
        border: 0;
    }

    .suboptions-container {
        display: flex;
        flex-direction: column;
        gap: 15px;
        font: var(--Heading-4-400);
    }

    .suboptions-line::after {
        content: "";
        display: flex;
        height: 2px;
        background-color: var(--grey-04);
        margin-bottom: 15px;
    }

`