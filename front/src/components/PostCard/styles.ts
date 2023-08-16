import styled from "styled-components"


interface IPostCardContentContent {
    url_image: string
}

export const PostCardContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-radius: 8px;
    gap: 10px;

    :hover {
        background-color: #ffffff05;
    }

    .post-image {
        display: flex;
        width: 100px;
        height: 100px;
        min-width: 100px;
        border-radius: 4px;
        background-image: url(${({ url_image }: IPostCardContentContent) => url_image});
        background-position: center;
        background-size: cover;
        cursor: pointer;
    }

    .post-mid-container {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .post-title {
        color: white;
        font: var(--Heading-6-400);
        cursor: pointer;
    }

    .post-info-container {
        display: flex;
        flex-direction: column;
    }

    .category-container {
        display: flex;
        justify-content: start;
        padding: 5px 0;
    }

    .post-author-container {
        display: flex;
        justify-content: end;
        align-items: end;
        gap: 5px;
    }

    .post-date {
        font: var(--Heading-8-300);
        color: var(--grey-05);
    }

    .post-author {
        color: var(--theme-01);
        font: var(--Heading-7-300);
        cursor: pointer;
    }

    svg {
        width: 20px;
        height: 20px;
        min-width: 20px;
        cursor: pointer;
    }

    @media (min-width: 1200px) {
        min-width: 500px;
        padding-right: 10px;

        .post-image {
            width: 150px;
            height: 150px;
            min-width: 150px;
        }

        .post-title {
            font: var(--Heading-5-400);
        }

        .post-date {
            font: var(--Heading-7-300);
        }

        .post-author {
            font: var(--Heading-6-400);
        }
    }
`