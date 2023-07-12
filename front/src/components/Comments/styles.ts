import styled from "styled-components"
import { DefaultContainer } from "../../styles/global"

export const CommentsContainer = styled(DefaultContainer)`
`

export const CommentsContent = styled.div`
    .comments-title {
        display: flex;
        justify-content: center;
        font: var(--Heading-6-400);
    }

    .new-comment__container {
        display: flex;
        flex-direction: column;
        height: 200px;
        padding: 20px;
        margin: 20px 0;
        border-radius: 4px;
        gap: 15px;
        background-color: var(--grey-08);
    }

    .comment {
        height: 100%;
        border: 0;
        background-color: transparent;
        font: var(--Heading-7-300);
        resize: none;
    }

    .comment::placeholder {
        font: var(--Heading-7-300);
    }

    .comment:focus {
        outline: 0;
    }

    .comment-button__container {
        display: flex;
        justify-content: end;
    }

    .comment-button {
        display: flex;
        padding: 10px 15px;
        border: 0;
        border-radius: 8px;
        gap: 5px;
        color: white;
        background-color: var(--theme-01);
        font: var(--Heading-7-400);
    }

    @media (min-width: 1200px) {
        width: 40%;
        margin-top: 30px;
    }
`
