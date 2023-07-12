import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../styles/global";

export const PostContainer = styled(DefaultContainer)`
    
`

export const PostContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 1200px) {
        flex-direction: row;
    }
`