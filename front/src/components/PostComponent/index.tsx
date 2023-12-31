import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/Post";
import api from "../../services/api";
import { CompletePostToHTML, formatDate } from "../../utils";
import { PostComponentContent } from "./styles";
import { useParams } from "react-router-dom";

const PostComponent = () => {

    const [post, setPost] = useState<IPost>({} as IPost)
    const [postHtml, setPostHtml] = useState("");
    const { id } = useParams();

    useEffect(() => {
        api.get(`http://localhost:8000/api/posts/${id}/?complete=true`)
        .then((response) => {
            response.data.post_date = formatDate(response.data.post_date)
            setPost(response.data);
            setPostHtml(CompletePostToHTML(response.data.complete_post));
        })
    }, [])

    return (
            <PostComponentContent>
                <h3 className="post-date">{post.post_date}</h3>
                <h2 className="post-title">{post.title}</h2>
                <h3 className="post-author">por<span className="post-author__name">{post.author?.username}</span></h3>

                <div dangerouslySetInnerHTML={{__html:postHtml}}></div>

                <div className="post-categories">
                    <h3 className="post-category">Tecnologia</h3>
                    <h3 className="post-category">Espaço</h3>
                </div>
            </PostComponentContent>
    )
}

export default PostComponent;