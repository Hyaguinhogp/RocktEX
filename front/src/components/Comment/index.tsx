import { CommentContent } from "./styles";

const Comment = () => {
    return (
        <CommentContent>
            <h2 className="comment-up">-<span className="comment-user">Unknow</span>3 horas atrás</h2>
            <h3 className="comment-text">
                Every article about Twitter in The Verge end with this. I know it sucks when the press email returns this, 
                but don't understand it's obligatory to repeat this ALL the articles about Twitter. Sigh
            </h3>
        </CommentContent>
    )
}

export default Comment;