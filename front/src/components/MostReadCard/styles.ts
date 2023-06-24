import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const MostReadCardContainer = styled.div`
    display: flex;
    align-items: start;
    border-bottom: 1px solid var(--grey-02);
    padding-bottom: 20px;

    .mrc__image-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 10px;

        span {
            margin-right: 10px;
        }
    }

    figure {
        display: flex;
        width: 130px;
        height: 130px;
        background-color: var(--grey-05);
        border-radius: 4px;
    }

    .mrc__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        overflow: hidden;

        h2 {
            font: var(--Heading-6-400)
        }
    }

    .category {
        display: flex;
        width: fit-content;
        padding: 2px 10px;
        margin-top: 10px;
        background-color: var(--theme-04);
        font: var(--Heading-7-300)
    }
`

