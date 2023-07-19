import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";
import Background from "../../assets/left-container-background.png";

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

export const AuthenticationContainer = styled(DefaultContainer)``

export const AuthenticationContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70vh;

    .right-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .left-container {
        display: none;
    }

    .desktop-auth-title {
        display: none;
    }

    .inputs-container {
        display: flex;
        flex-direction: column;
        padding: 30px 0;
    }

    .input-container {
        display: flex;
        align-items: center;
        padding: 5px 0;
        margin-bottom: 5px;
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

    p {
        height: 40px;
        color: red;
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

    @media (min-width: 1200px) {
        flex-direction: row;
        height: 80vh;
        margin-top: 50px;
        border-radius: 8px;
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
        overflow: hidden;

        .left-container {
            display: flex;
            flex-direction: column;
            width: 60%;
            padding: 120px 60px;
            background: url(${Background});
            background-position: center;
            background-size: cover;
            color: white;

            h1 {
                font: var(--Heading-0-500);
                margin-bottom: 30px;
            }

            h3 {
                font: var(--Heading-6-300);
                line-height: 30px;
            }
        }

        .right-container {
            width: 40%;
            padding: 60px 60px;
        }

        .desktop-auth-title {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
            font: var(--Heading-3-300);
        }
    }

`