import styled from "styled-components";

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.25);
    z-index: 20;

    svg {
        width: 100px;
        height: 100px;
    }
`