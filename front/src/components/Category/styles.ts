import styled from "styled-components";

interface ICategoryContainerProps {
    color: string
}

export const CategoryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 3px 15px;
    overflow: hidden;
    background-color: var(--theme-01);
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    span {
        font: var(--Heading-7-300);
        color: white;
    }

    @media (min-width: 1200px) {
        font: var(--Heading-7-300);
    }
`