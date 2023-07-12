import Comments from "../../components/Comments";
import DefaultPageComponent from "../../components/DefaultPageComponent";
import PostComponent from "../../components/PostComponent";
import { PostContainer, PostContent } from "./styles";
import { DefaultContent } from "../../styles/global";

const Post = () => {

    return(
        <DefaultPageComponent>
            <PostContainer>
                <PostContent>
                    <PostComponent />
                    <Comments />
                </PostContent>
            </PostContainer>
        </DefaultPageComponent>
    )
}

export default Post;