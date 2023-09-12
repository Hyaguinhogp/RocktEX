import { IPostBase, IPostCardData } from "../../interfaces/Post";
import Category from "../Category";
import { PostCardContent } from "./styles";
import { BiEdit } from "react-icons/bi"

interface IPostCardProps {
    postData: IPostBase
    isProfileAndOwner?: boolean
}

const PostCard = ({ postData, isProfileAndOwner=false }: IPostCardProps) => {

    const { title, category, author, post_date, cover_image } = {...postData}

    return (
        <PostCardContent url_image={cover_image}>
            <div className="post-image"></div>
            <div className="post-mid-container">
                <h3 className="post-title">{title}</h3>
                <div className="post-info-container">
                    <div className="category-container">
                        <Category category={category} />
                    </div>
                    <div className="post-author-container">
                        <h3 className="post-date">{post_date}</h3>
                        <h3 className="post-author">{author.username}</h3>
                    </div>
                </div>
            </div>
            {isProfileAndOwner && <BiEdit />}
        </PostCardContent>
    )
}

export default PostCard;