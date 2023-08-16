import { IHighligt } from "../../interfaces/Highlights";
import { formatTextSize } from "../../utils";
import { HighlightContainer, HighlightContent, HighlightTitle } from "./styles";

interface IHighlightProps {
    size: 1 | 2
    highlight: IHighligt
}

const Highlight = ({size, highlight}:IHighlightProps) => {
    return (
        <HighlightContainer size={size} image_url={highlight.image_url}>
            <HighlightContent size={size}>
                <div className="highlight_top_container">
                    <h3>{highlight.date}</h3>
                </div>
                <div className="highlight_bottom_container">
                    <HighlightTitle>
                        <div className="blue-detail"></div>
                        <h2 className="highlight_title">{highlight.title}</h2>
                    </HighlightTitle>

                    <h3 className="author">Por <span className="author-name">Marco Aurélio</span></h3>
                </div>
            </HighlightContent>
        </HighlightContainer>
    )
}

export default Highlight;