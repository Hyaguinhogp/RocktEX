import { IHighlightProps } from "../../interfaces/Highlights";
import CategoriesPanel from "../CategoriesPanel";
import Highlight from "../Highlight";
import { HighlightsContainer, HighlightsContent } from "./styles";

const Highlights = ({highlights}: IHighlightProps) => {
    return (
        <HighlightsContainer>
            <HighlightsContent>
                <div className="highlight_first_section">
                    <Highlight size={1} highlight={highlights[0]} />
                </div>

                <div className="highlight_second_section">
                    <Highlight size={2} highlight={highlights[1]} />
                    <Highlight size={2} highlight={highlights[2]} />
                </div>
            </HighlightsContent>
        </HighlightsContainer>
    )
}

export default Highlights;