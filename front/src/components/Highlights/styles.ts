import styled from "styled-components"
import { DefaultContainer, DefaultContent } from "../../styles/global"

export const HighlightsContainer = styled(DefaultContainer)`
    flex-direction: column;
    margin-top: 20px;
`

export const HighlightsContent = styled(DefaultContent)`
    display: flex;
    gap: 16px;
    .highlight_first_section {
        display: flex;
        width: 50%;
    }

    .highlight_second_section {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 50%;
    }
`