import { IHighligt } from "../../interfaces/Highlights";
import { IPostBase } from "../../interfaces/Post";
import { formatTextSize } from "../../utils";
import { HighlightContainer, HighlightContent, HighlightTitle } from "./styles";

interface IHighlightProps {
    size: 1 | 2
    highlight: IPostBase
}

const Highlight = ({size, highlight}:IHighlightProps) => {
    return (
        <HighlightContainer size={size} image_url={highlight?.cover_image}>
            <HighlightContent>
                <div className="highlight_top_container">
                    <h3>{highlight?.post_date}</h3>
                </div>
                <div className="highlight_bottom_container">
                    <HighlightTitle>
                        <h2 className="highlight_title">{highlight?.title}</h2>
                    </HighlightTitle>

                    <h3 className="author">Por <span className="author-name">{highlight?.author.username}</span></h3>
                </div>
            </HighlightContent>
        </HighlightContainer>
    )
}

export default Highlight;