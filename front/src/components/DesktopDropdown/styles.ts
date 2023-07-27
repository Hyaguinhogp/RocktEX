import { motion } from "framer-motion";
import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const DesktopDropdownContainer = styled(motion.div)`
    position: fixed;
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    top: 62px;
    background-color: #1D1F21F0;
    backdrop-filter: blur(15px);
`

export const DesktopDropdownContent = styled(motion.div)`
    display: flex;
    width: 100%;
    max-width: 1200px;
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 5vw;
    color: white;

    .desktop-column {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .title {
        font: var(--Heading-6-300);
        color: white;
    }

    h3 {
        font: var(--Heading-7-300);
        color: var(--grey-05);
        cursor: pointer;
    }

    h3:hover {
        color: white;
    }
`