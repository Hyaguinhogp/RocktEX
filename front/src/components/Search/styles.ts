import { motion } from "framer-motion";
import styled from "styled-components";
import { ISearchProps } from ".";

interface ISearchContainerProps {
    isMobile: boolean
}

export const SearchContainer = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ isMobile }: ISearchContainerProps) => !isMobile && "width: 20vw"};
    height: 52px;
    padding: 0 15px;
    margin-bottom: 50px;
    border-radius: 4px;
    background-color: rgb(0, 0, 0, 0.1);

    svg {
        width: 25px;
        height: 25px;
        color: var(--theme-01);
    }
    
    .search {
        height: 100%;
        background-color: transparent;
        color: white;
        outline: 0;
        font-weight: 300;
    }
    
    .search-button {
        background-color: transparent;
        border: 0;
    }
`