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
                        <div></div>
                        <h2 className="highlight_title">{formatTextSize(highlight.title, size == 2 ? 30 : 60)}</h2>
                    </HighlightTitle>
                    <h3 className="highlight_description">
                        {formatTextSize(highlight.description, size == 2 ? 30 : 60)}
                    </h3>
                </div>
            </HighlightContent>
        </HighlightContainer>
    )
}

export default Highlight;