import styled from "styled-components"
import { DefaultContainer, DefaultContent } from "../../styles/global"

export const CommentContent = styled.div`
    display: flex;
    flex-direction: column;

    .comment-up {
        display: flex;
        align-items: end;
        margin-bottom: 10px;
        font: var(--Heading-7-300);
        color: var(--grey-03);
    }
    
    .comment-user {
        font: var(--Heading-6-400);
        color: var(--theme-01);
        margin: 0 8px;
    }

    .comment-text {
        margin-left: 14px;
        font: var(--Heading-7-300);
    }
`
