import styled from "styled-components";

interface IGameCardContainerProps {
    url_image: string
}

export const GameCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;

    .game__image {
        display: flex;
        width: 100%;
        height: 300px;
        background: url(${({url_image}: IGameCardContainerProps) => url_image});
        background-position: 50%;
        background-size: cover;
        cursor: pointer;
    }

    .game__title {
        font: var(--Heading-6-400);
        margin-top: 8px;
        cursor: pointer;
        width: fit-content;
    }

    .game__price-container {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }

    .discount-percent {
        padding: 5px;
        border-radius: 5px;
        background-color: var(--theme-01);
        color: white;
        font: var(--Heading-7-300)
    }

    .prices {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .normal-price {
        position: relative;
        color: var(--grey-03);
        font: var(--Heading-8-300);
        text-decoration: line-through;
    }

    .actual-price {
        font: var(--Heading-6-400)
    }

    @media (min-width: 1200px) {
        width: 300px;

        .game__image {
            height: 400px;
        }

        .game__title {
            font: var(--Heading-5-400);
            margin: 8px 0 8px 0;
        }

        .discount-percent {
            font: var(--Heading-6-300)
        }

        .normal-price {
            font: var(--Heading-7-300);
        }

        .actual-price {
            font: var(--Heading-5-400)
        }
    }
`

