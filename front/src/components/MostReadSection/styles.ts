import styled from "styled-components"
import { DefaultContainer, DefaultContent } from "../../styles/global"

export const MostReadSectionContainer = styled(DefaultContainer)`
    padding-top: 50px;
    background-color: var(--theme-00);    
`

export const MostReadSectionContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;

    @media (min-width: 1200px) {
        flex-direction: row;
        gap: 100px;
    } 
`
