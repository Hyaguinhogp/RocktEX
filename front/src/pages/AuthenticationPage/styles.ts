import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const MobileTitleContainer = styled(DefaultContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: var(--theme-00);
    color: white;
    font: var(--Heading-3-400);

    @media (min-width: 1200px) {
        display: none;
    }
`

export const AuthenticationContainer = styled(DefaultContainer)`
    
`

export const AuthenticationContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70vh;

    .inputs-container {
        display: flex;
        flex-direction: column;
        padding: 30px 0;
    }

    .input-container {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        padding: 5px 0;
        gap: 10px;
        border-bottom: 2px solid var(--grey-03);
    }

    .input-container:hover {
        border-color: var(--theme-01);

        svg {
            color: var(--theme-01);
        }
    }

    input {
        width: 100%;
        font: var(--Heading-6-400);
    }

    input:focus {
        outline: none;
    }

    svg {
        width: 30px;
        height: 30px;
        color: var(--grey-03);
    }
    
    a {
        color: var(--theme-01);
    }

    .continue-container {
        display: flex;
        justify-content: center;
    }

    .continue-button {
        width: 100%;
        padding: 15px;
        background-color: var(--theme-01);
        color: white;
        font: var(--Heading-5-400);
        border: 0;
    }
`