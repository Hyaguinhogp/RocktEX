import styled from "styled-components"
import { DefaultContainer, DefaultContent } from "../../styles/global"

export const RelatedContainer = styled.div`
    margin-top: 15px;

    .related-title {
        font: var(--Heading-6-400);
        color: var(--theme-01);
        margin-bottom: 8px;
    }
`

export const RelatedContent = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 5px solid var(--theme-01);
    padding-left: 10px;

    .related {
        font: var(--Heading-7-400);
        line-height: 25px;
    }

    .line {
        border-bottom: 1px solid var(--grey-05);
        padding-bottom: 15px;
        margin-bottom: 15px;
    }
`
