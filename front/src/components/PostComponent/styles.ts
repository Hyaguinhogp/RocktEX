import styled from "styled-components"
import { DefaultContainer, DefaultContent } from "../../styles/global"

export const PostComponentContainer = styled(DefaultContainer)`

`

export const PostComponentContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;

    .post-date {
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 15px 0;
        font-size: 12px;
    }

    .post-title {
        font-size: 26px;
    }

    .post-author {
        display: flex;
        justify-content: end;
        align-items: end;
        font-weight: 300;
        margin: 15px 0;
    }

    .post-author__name {
        font-weight: 500;
        font-size: 18px;
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
        font-weight: 300;
        font-size: 17px;
        margin: 15px 0;
        line-height: 30px;
    }
`
