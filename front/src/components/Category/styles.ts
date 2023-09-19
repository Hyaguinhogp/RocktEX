import styled from "styled-components";

interface ICategoryContainerProps {
    color: string
}

export const CategoryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 2px 5px;
    overflow: hidden;
    background-color: var(--theme-01);
    cursor: pointer;
    
    span {
        font: var(--Heading-7-300);
        color: ${({color}: ICategoryContainerProps) => color == "white" ? "black" : "white"};
    }

    @media (min-width: 1200px) {
        padding: 3px 15px;
        font: var(--Heading-7-300);
    }
`