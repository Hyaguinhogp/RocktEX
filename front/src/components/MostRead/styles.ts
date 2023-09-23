import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const MostReadContent = styled.div`
    display: flex;
    flex-direction: column;
    color: white;

    .most-read__title-container {
        margin-bottom: 20px;
        h2 {
            font-size: 24px;
            font-weight: 400;
            z-index: 2;
        }
    }

    .most-reads {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .read-more {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        font: var(--Heading-7-300);
        color: var(--grey-05);
        text-decoration: underline;
    }

    @media (min-width: 1200px) {
        width: 50%;
    }
`