import Comment from "../Comment";
import { CommentsContainer, CommentsContent } from "./styles";
import { RiSendPlaneFill } from "react-icons/ri"

const Comments = () => {
    return (
            <CommentsContent>
                <h2 className="comments-title">Comentários</h2>
                <div className="new-comment__container">
                    <textarea placeholder="Digite aqui..." className="comment"></textarea>
                    <div className="comment-button__container">
                        <button className="comment-button">
                            <h3>Enviar</h3>
                            <RiSendPlaneFill />
                        </button>
                    </div>
                </div>
                <Comment />
            </CommentsContent>
    )
}

export default Comments;