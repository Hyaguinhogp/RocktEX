import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";
import Image from "../../assets/img4.png"

export const PresentationContainer = styled(DefaultContainer)`
    background-color: var(--theme-00);
    background-image: url(${Image});
    background-position: center 0px;
    background-size: 400px;
    background-repeat: no-repeat;
    
    @media(min-width: 1200px) {
        background-image: url(${Image});
        background-position: -100px 0px;
        background-size: 900px;
        background-repeat: no-repeat;
    }
`

export const PresentationContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;
    padding-top: 20vh;
    padding-bottom: 10vh;
    color: white;
    text-shadow: 0px 0px 50px black;
    
    h1 {
        font-size: 70px;
    }
    
    h2 {
        line-height: 1.5rem;
        font-size: 20px;
        text-align: center;
    }

    .presentation-image__container {
        display: flex;
        height: 250px;
    }
    
    .presentation-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3vh;
    }

    @media(min-width: 1200px) {
        flex-direction: row;
        padding: 15vh 0;

        h1 {
            font-size: 70px;
        }

        h2 {
            line-height: 2.5rem;
            font-size: 24px;
            text-align: center;
            max-width: 70%;
        }

        .presentation-image__container {
            min-width: 45%;
        }
    }
`