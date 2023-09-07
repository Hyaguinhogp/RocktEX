import styled from "styled-components"
import { DefaultContainer, DefaultContent } from "../../styles/global"

export const PostComponentContainer = styled(DefaultContainer)`

`

export const PostComponentContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 5vh;

    .post-date {
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 15px 0;
        font: var(--Heading-8-400);
    }

    .post-title {
        font: var(--Heading-4-400);
    }

    .post-author {
        display: flex;
        justify-content: end;
        align-items: end;
        font-weight: 300;
        margin: 15px 0;
    }

    .post-author__name {
        font: var(--Heading-7-500);
        margin-left: 5px;
        color: var(--theme-01);
    }

    .post-image {
        width: 100%;
        height: 400px;
        overflow: hidden;
        background: url(https://t2.tudocdn.net/674421?w=646&h=284);
        background-position: center;
        background-size: cover;
    }

    .post-image__description {
        display: flex;
        justify-content: center;
        font-weight: 300;
        color: var(--grey-03);
        margin-top: 10px;
    }

    .post-text {
        font: var(--Heading-7-300);
        margin: 15px 0;
        line-height: 30px;
    }

    .post-categories {
        display: flex;
        gap: 15px
    }

    .post-category {
        background-color: var(--theme-01);
        padding: 10px 15px;
        color: white;
    }

    @media (min-width: 1200px) {
        width: 60%;
        margin-top: 15px;

        .post-date {
            font: var(--Heading-7-400);
        }

        .post-title {
            font: var(--Heading-3-400);
        }

        .post-image {
            height: 500px;
        }
    }
`
