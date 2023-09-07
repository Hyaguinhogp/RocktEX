import styled from "styled-components";
import { DefaultContent } from "../../styles/global";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5vh 20px;
    background-color: var(--theme-00);
`

export const FooterContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;
    color: white;
    gap: 5vw;

    .footer-title {
        font: var(--Heading-5-400);
        font-size: 30px;
        margin-bottom: 8px;
    }

    .footer-column {
        display: flex;
        flex-direction: column;
    }

    .footer-column__title {
        font: var(--Heading-6-400);
        margin-bottom: 8px;
    }

    .footer-column__item {
        font: var(--Heading-7-300);
        margin-bottom: 5px;
        color: var(--grey-07);
        line-height: 1.5rem;
        text-decoration: none;
    }

    @media(min-width: 1200px) {
        flex-direction: row;
        .footer-column {
            max-width: 30%;
        }
    }
`