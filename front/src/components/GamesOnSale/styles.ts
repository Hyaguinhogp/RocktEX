import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const GamesOnSaleContainer = styled(DefaultContainer)`
    margin-top: 50px;
`

export const GamesOnSaleContent = styled(DefaultContent)`
    .gos_title_container {
        display: flex;
        align-items: center;
    }

    .blue-circle {
        width: 10px;
        height: 10px;
        background-color: var(--theme-01);
        border-radius: 50%;
        margin-right: 10px;
    }

    .gos_title {
        font: var(--Heading-6-400)
    }
`