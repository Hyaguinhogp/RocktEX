import styled from "styled-components"


interface IProfilePostContent {
    url_image: string
}

export const ProfilePostContent = styled.div`
    display: flex;
    justify-content: space-between;

    .post-image {
        width: 100px;
        height: 100px;
        border-radius: 4px;
        background-image: url(${({ url_image }: IProfilePostContent) => url_image});
        background-position: center;
        background-size: cover;
    }

    .post-title {
        width: 60%;
        color: white;
        font: var(--Heading-6-400);
    }

    svg {
        width: 20px;
        height: 20px;
    }

    @media (min-width: 1200px) {
        .post-image {
            width: 150px;
            height: 150px;
        }

        .post-title {
            font: var(--Heading-5-400);
        }
    }
`