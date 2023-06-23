import styled from "styled-components";

interface IGameCardContainerProps {
    url_image: string
}

export const GameCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;

    .game__image {
        display: flex;
        width: 100%;
        height: 400px;
        background: url(${({url_image}: IGameCardContainerProps) => url_image});
        background-position: 50%;
        background-size: cover;
    }

    .game__title {
        font: var(--Heading-5-400);
        margin: 8px 0 8px 0;
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
        font: var(--Heading-6-300)
    }

    .prices {
        display: flex;
        align-items: end;
    }

    .normal-price {
        position: relative;
        top: -4px;
        color: var(--grey-03);
        font: var(--Heading-7-300);
        text-decoration: line-through;
    }

    .actual-price {
        font: var(--Heading-4-400)
    }
`

