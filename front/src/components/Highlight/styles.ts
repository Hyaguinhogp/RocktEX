import styled from "styled-components"
import { DefaultContainer, DefaultContent } from "../../styles/global"

interface IHighlightContainerProps {
    size: 1 | 2
    image_url: string
}

interface IHighlightContentProps {
    size: 1 | 2
}

export const HighlightContainer = styled(DefaultContainer)`
    position: relative;
    padding: 15px;
    height: ${({size}: IHighlightContainerProps ) => size == 1 ? "600px" : "292px" };

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${({image_url}: IHighlightContainerProps ) => image_url });
        background-size: cover;
        background-position: 50%;
        filter: brightness(70%);
        z-index: -1;
    }
`

export const HighlightContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .highlight_top_container {
        display: flex;
        justify-content: end;
        color: var(--grey-03);
        font-size: 10px;
        margin-bottom: 20px;
    }

    .highlight_bottom_container {
        display: flex;
        flex-direction: column;
        justify-content: end;
        height: 100%;
        h3 {
            color: var(--grey-05);
            font: var(--Heading-7-300);
        }
    }

    h2 {
        color: white;
        font: var(--Heading-2-400);
        font: ${({size}: IHighlightContentProps ) => size == 1 ? "var(--Heading-2-400)" : "var(--Heading-4-400)" };
        font-family: 'Oswald', sans-serif;
    }
`

export const HighlightTitle = styled.div`
    display: flex;
    margin-bottom: 10px;

    div {
        display: flex;
        content: "";
        width: 5px;
        margin-right: 10px;
        background-color: var(--theme-01);
    }

    h2 {
        width: 90%;
    }
`