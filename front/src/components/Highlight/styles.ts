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
    height: ${({ size }: IHighlightContainerProps) => size == 1 ? "600px" : "292px"};
    padding: 15px;
    overflow: hidden;
    
    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${({ image_url }: IHighlightContainerProps) => image_url});
        background-size: cover;
        background-position: 50%;
        filter: brightness(70%);
        z-index: -1;
        transition: transform .5s;
    }
    
    :hover {
        ::before {
            transform: scale(1.1);
            filter: brightness(80%);
        }
    }

    @media (min-width: 1200px) {
        height: ${({ size }: IHighlightContainerProps) => size == 1 ? "800px" : "392px"};
        padding: 30px;
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
        color: var(--grey-05);
        font: var(--Heading-8-300);
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.9);
        margin-bottom: 20px;
    }

    .highlight_bottom_container {
        display: flex;
        flex-direction: column;
        justify-content: end;
        height: 100%;
    }

    h2 {
        color: white;
        font: var(--Heading-6-400);
        font-family: 'Oswald', sans-serif;
    }

    .author {
        display: flex;
        justify-content: end;
        align-items: end;
        margin-top: 5px;
        color: var(--grey-05);
        font: var(--Heading-7-300);
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }

    .author-name {
        color: white;
        font: var(--Heading-7-400);
        margin-left: 3px;
        cursor: pointer;
    }

    @media (min-width: 1200px) {
        .highlight_bottom_container {
            .author {
                margin-top: 10px;
                font: var(--Heading-7-300);
            }

            .author-name {
                font: var(--Heading-7-300);
                margin-left: 3px;
            }
        }

        h2 {
            font: var(--Heading-3-400);
            font-family: 'Oswald', sans-serif;
        }
    }
`

export const HighlightTitle = styled.div`
    display: flex;
    margin-bottom: 10px;
    cursor: pointer;

    .blue-detail {
        display: flex;
        content: "";
        width: 5px;
        margin-right: 10px;
        border-radius: 2px;
        background-color: var(--theme-01);
    }

    .highlight_title {
        width: 90%;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
    
    .highlight_title:hover {
    }
`