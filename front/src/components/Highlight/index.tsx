import { useNavigate } from "react-router-dom";
import { IHighligt } from "../../interfaces/Highlights";
import { IPostBase } from "../../interfaces/Post";
import { formatDate, formatTextSize } from "../../utils";
import { HighlightContainer, HighlightContent, HighlightTitle } from "./styles";

interface IHighlightProps {
    size: 1 | 2
    highlight: IPostBase
}

const Highlight = ({size, highlight}:IHighlightProps) => {

    const navigate = useNavigate();

    return (
        <>
            {
                highlight ? 
                <HighlightContainer size={size} image_url={highlight.cover_image}>
                    <HighlightContent>
                        <div className="highlight_top_container">
                            <h3>{formatDate(highlight.post_date)}</h3>
                        </div>
                        <div className="highlight_bottom_container">
                            <HighlightTitle>
                                <h2 className="highlight_title" onClick={() => navigate(`/posts/${highlight.id}`)}>{highlight.title}</h2>
                            </HighlightTitle>
        
                            <h3 className="author">Por <span className="author-name">{highlight.author.username}</span></h3>
                        </div>
                    </HighlightContent>
                </HighlightContainer> : 
                <HighlightContainer size={size}>
                    <HighlightContent>
                        <div className="highlight_top_container">
                                <div className="date-empty"></div>
                            </div>
                            <div className="highlight_bottom_container">
                                <HighlightTitle>
                                    <div className="title-empty"></div>
                                </HighlightTitle>
                                <div className="author-empty__container">
                                    <div className="author-empty"></div>
                                </div>
                            </div>
                    </HighlightContent>
                </HighlightContainer>
                    
            }
        </>

    )
}

export default Highlight;