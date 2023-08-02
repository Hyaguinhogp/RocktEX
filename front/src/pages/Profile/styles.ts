import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

interface IProfileBottomContentProps {
    minHeight: number
}

export const ProfileContainer = styled(DefaultContainer)`
    flex-direction: column;
    background-color: var(--theme-00);
    color: white;
`

export const ProfileTopContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;

    .profile-info {
        display: flex;
        justify-content: space-between;
        padding: 20px 0px;
    }

    .profile-image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-image: url(https://upload.wikimedia.org/wikipedia/commons/5/55/Metropolitan_Marcus_Aurelius_Roman_2C_AD_%28cropped%29.jpg);
        background-position: center;
        background-size: cover;
    }

    .profile-text {
        display: flex;
        flex-direction: column;
        width: 70%;
    }

    .profile-name {
        font: var(--Heading-5-300);
        color: var(--theme-01);
        margin-bottom: 10px;
    }
    
    .profile-description {
        font: var(--Heading-7-300);
        color: var(--grey-07);
    }

    .profile-edit-button {
        width: 20px;
        height: 20px;
    }

    .profile-social {
        display: flex;
        justify-content: center;
        gap: 50px;

        svg {
            width: 40px;
            height: 40px;
            color: white;
        }
    }

    .profile-options {
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
    }

    .profile-option {
        position: relative;
        font: var(--Heading-6-400);
    }

    .selected {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .selected::after {
        content: "";
        display: flex;
        width: 30px;
        height: 3px;
        border-radius: 1.5px;
        background-color: var(--theme-01);
    }

    @media (min-width: 1200px) {
        flex-direction: row;
        padding-bottom: 50px;

        .profile-info {
            width: 50%;
        }

        .profile-image {
            width: 150px;
            height: 150px;
        }

        .profile-text {
            width: 60%;
        }

        .profile-name {
            font: var(--Heading-3-300);
        }

        .profile-description {
            font: var(--Heading-7-300);
        }

        .profile-social {
            flex-direction: column;
            gap: 25px;
            margin: 0 20px;
        }

        .profile-options {
            width: 40%;
            justify-content: center;
            align-items: center;
            gap: 15px;
        }

        .profile-option {
            font: var(--Heading-7-300);
            color: var(--grey-05);
            cursor: pointer;
        }

        .selected {
            font: var(--Heading-3-300);
            color: var(--theme-01);
        }

        .selected::after {
            display: none;
        }
    }
`

export const ProfileBottomContent = styled(DefaultContent)`
    display: flex;
    min-height: ${({ minHeight }: IProfileBottomContentProps) => minHeight}px;

    .profile-posts {
        display: flex;
        flex-direction: column;
        height: fit-content;
        gap: 20px;
    }

    @media (min-width: 1200px) {
        .profile-posts {
            display: grid;
            grid-template-columns: repeat(2, 48%);
            grid-column-gap: 4%;
        }
    }
`