import styled from "styled-components"
import { DefaultContainer, DefaultContent } from "../../styles/global"

export const HighlightsContainer = styled(DefaultContainer)`
    flex-direction: column;
    margin-top: 20px;

    @media(min-width: 1200px) {
    }
`

export const HighlightsContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;
    gap: 16px;

    .highlight_first_section {
        display: flex;
    }

    .highlight_second_section {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .category-panel-desktop {
        display: none;
        width: 20%;
    }

    @media(min-width: 1200px) {
        flex-direction: row;

        .highlight_first_section {
            width: 50%;
        }

        .highlight_second_section {
            width: 50%;
        }

        .category-panel-mobile {
            display: none;
        }

        .category-panel-desktop {
            display: flex;
        }
    }
`