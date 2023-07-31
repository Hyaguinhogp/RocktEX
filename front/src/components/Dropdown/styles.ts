import { motion } from "framer-motion";
import styled from "styled-components";

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
    padding: 30px 20px;
    background-color: white;
    background-color: var(--theme-00);
    color: white;

    .close-container {
        display: flex;
        justify-content: end;
        margin-bottom: 50px;
    }

    .close-button {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 0;
        cursor: pointer;
        color: var(--theme-01);
    }

    .suboptions-container {
        display: flex;
        flex-direction: column;
        gap: 15px;
        font: var(--Heading-4-400);

        h3 {
            position: relative;
            left: 0px;
            cursor: pointer;
            transition: left 0.3s;
        }

        a {
            font-style: none;
            text-decoration: none;
            color: white;
        }

        h3:hover {
            left: 15px;
        }

        .selected {
            display: flex;
            align-items: center;
            margin-left: 20px;
            margin-left: 20px;
        }

        .selected::before {
            content: "";
            position: absolute;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: var(--theme-01);
            left: -20px;
        }
    }

    .suboptions-line::after {
        content: "";
        display: flex;
        height: 2px;
        background-color: var(--grey-04);
        margin-bottom: 15px;
    }

`