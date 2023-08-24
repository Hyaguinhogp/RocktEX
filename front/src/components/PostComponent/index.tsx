import { useEffect, useState } from "react";
import Related from "../Related";
import { PostComponentContent } from "./styles";
import { Posts } from "../../database";
import { CompletePostToHTML } from "../../utils";

const PostComponent = () => {

    const [postHtml, setPostHtml] = useState("");

    useEffect(() => {
        setPostHtml(CompletePostToHTML(Posts[0].complete_post));
    }, [])

    return (
            <PostComponentContent>
                <h3 className="post-date">{Posts[0].post_date}</h3>
                <h2 className="post-title">{Posts[0].title}</h2>
                <h3 className="post-author">por<span className="post-author__name">{Posts[0].author}</span></h3>

                <div dangerouslySetInnerHTML={{__html:postHtml}}></div>

                <div className="post-categories">
                    <h3 className="post-category">Tecnologia</h3>
                    <h3 className="post-category">Espaço</h3>
                </div>
            </PostComponentContent>
    )
}

export default PostComponent;