import styled from "styled-components"
import { DefaultContainer, DefaultContent } from "../../styles/global"

export const MiniPostContent = styled.div`
    display: flex;
    flex-direction: column;
    color: white;

    .mini-post__image {
        width: 100%;
        height: 200px;
        background: url(https://bncamazonas.com.br/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-09-at-16.48.34.jpeg);
        background-position: center;
        background-size: cover;
    }

    .mini-post__title {
        position: relative;
        top: -25px;
        font: var(--Heading-3-500);
        font-family: 'Oswald', sans-serif;
        line-height: 35px;
        text-shadow: 0 0 3px var(--theme-00);
    }
    
    .blue {
        font-family: 'Oswald', sans-serif;
        color: var(--theme-01);
        margin: 0 10px;
    }

    .mini-post__text {
        font: var(--Heading-7-400);
        font-family: 'Inria Serif', serif;
        line-height: 26px;
        margin-bottom: 15px;
    }

    .mini-post__user {
        display: flex;
        justify-content: end;
        align-items: center;
    }

    .user-image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        margin-right: 5px;
        border-radius: 50%;
        background-color: #00FF38;
        color: black
    }

    @media (min-width: 1200px) {
        width: 50%;

        .mini-post__title {
            font: var(--Heading-2-500);
            font-family: 'Oswald', sans-serif;
        }
        .mini-post__text {
            font: var(--Heading-6-400);
            font-family: 'Inria Serif', serif;
        }
    } 
`
