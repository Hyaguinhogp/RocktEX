import styled from "styled-components";

export const DefaultConfirmationModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 25px 30px;
    gap: 20px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);

    .modal-top-container {
        display: flex;
        justify-content: space-between;

        .modal-title {
            font: var(--Heading-6-400);
        }

        svg {
            cursor: pointer;
            width: 20px;
            height: 20px;
        }
    }

    .modal-text {
        font: var(--Heading-7-400);
        color: var(--grey-02);
    }

    .modal-bottom-container {
        display: flex;
        justify-content: end;
        gap: 15px;

        button {
            cursor: pointer;
            font: var(--Heading-7-400);
        }
        
        .deny {
            border: 0;
            outline: 0;
            background-color: transparent;
        }
        
        .confirm {
            padding: 5px 10px;
            background-color: #FF3030;
            color: white;
            border: 0;
            border-radius: 4px;
        }
    }
`