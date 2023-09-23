import styled from "styled-components"
import { DefaultContainer, DefaultContent } from "../../styles/global"

interface IHighlightContainerProps {
    size: 1 | 2
    image_url?: string
}

interface IHighlightContentProps {
    size: 1 | 2
}

export const HighlightContainer = styled(DefaultContainer)`
    position: relative;
    height: ${({ size }: IHighlightContainerProps) => size == 1 ? "400px" : "250px"};
    padding: 15px;
    overflow: hidden;
    border-radius: 20px;
    
    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({ image_url }: IHighlightContainerProps) => image_url ? `url(${image_url})` : 'var(--grey-08)' };
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
        height: ${({ size }: IHighlightContainerProps) => size == 1 ? "500px" : "242px"};
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
        font-style: italic;
    }

    .highlight_bottom_container {
        display: flex;
        flex-direction: column;
        justify-content: end;
        padding: 10px;
        border-radius: 15px;
        background-color: #1D1F2150;
        backdrop-filter: blur(10px);
    }

    h2 {
        color: white;
        font: var(--Heading-4-400);
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

    .date-empty {
        background-color: white;
        width: 40px;
        height: 20px;
    }


    .title-empty::before {
        content: "";
        display: block;
        position: relative;
        background-color: white;
        width: 110%;
        height: 30px;
        top: -40px;
    }

    .title-empty {
        background-color: white;
        width: 75%;
        height: 30px;
        margin-bottom: 10px;
    }

    .author-empty__container {
        display: flex;
        width: 100%;
        justify-content: end;
        align-items: end;
    }

    .author-empty {
        background-color: white;
        width: 20%;
        height: 20px;
    }

    @media (min-width: 1200px) {
        .highlight_bottom_container {
            .author {
                margin-top: 0;
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

export const HighlightTitle = styled.a`
    display: flex;
    cursor: pointer;

    .highlight_title {
        width: 90%;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
    
    .highlight_title:hover {
    }
`