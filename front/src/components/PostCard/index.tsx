import { useNavigate } from "react-router-dom";
import { IPostBase, IPostCardData } from "../../interfaces/Post";
import { formatDate } from "../../utils";
import Category from "../Category";
import { PostCardContent } from "./styles";
import { BiEdit } from "react-icons/bi"

interface IPostCardProps {
    postData: IPostBase
    isProfileAndOwner?: boolean
    color?: "black" | "white"
}

const PostCard = ({ postData, isProfileAndOwner=false, color="white" }: IPostCardProps) => {

    const { id, title, category, author, post_date, cover_image } = {...postData}
    const navigate = useNavigate()

    return (
        <PostCardContent url_image={cover_image} color={color}>
            <div className="post-image"></div>
            <div className="post-mid-container">
                <h3 onClick={() => navigate(`/posts/${id}`)} className="post-title">{title}</h3>
                <div className="post-info-container">
                    <div className="category-container">
                        <Category category={category} color={color} />
                    </div>
                    <div className="post-author-container">
                        <h3 className="post-date">{formatDate(post_date)}</h3>
                        <h3 className="post-author">{author.username}</h3>
                    </div>
                </div>
            </div>
            {isProfileAndOwner && <BiEdit />}
        </PostCardContent>
    )
}

export default PostCard;