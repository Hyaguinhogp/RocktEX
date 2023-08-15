import styled from "styled-components"
import { DefaultContainer, DefaultContent } from "../../styles/global"

export const HighlightsContainer = styled(DefaultContainer)`
    flex-direction: column;
    margin-top: 20px;

    .category-panel-mobile {
        width: 100%;
        max-width: 1200px;
        max-height: 80px;
        overflow: hidden;
        border-radius: 4px;
        margin-bottom: 16px;
    }

    @media(min-width: 1200px) {
        .category-panel-mobile {
            display: none;
        }
    }
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

    .category-panel-desktop {
        display: none;
        width: 20%;
    }

    @media(min-width: 1200px) {
        .category-panel-mobile {
            display: none;
        }

        .category-panel-desktop {
            display: flex;
        }
    }
`