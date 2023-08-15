import styled from "styled-components";

export const CategoriesPanelContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 600px;
    border-radius: 4px;
    background: linear-gradient(128deg, #007BFF 0%, #004793 100%);
    color: white;
    overflow: hidden;

    .line {
        position: relative;
        display: flex;
        width: max-content;
        color: white;
    }

    .content {
        margin-right: 5px;
    }
    
    @media (min-width: 1200px) {
        height: 800px;
    }
`

export const RandomSpan = styled.span`
    font-family: ${() => Math.floor(Math.random() * 2) == 0 ? "'Lexend', sans-serif" : "'Oswald', sans-serif"};
    font-weight: ${() => 300 + (Math.floor(Math.random() * 5) * 100)};
    font-size: ${() => 12 + (Math.floor(Math.random() * 5))};
`