import { IMostRead } from "../../interfaces/MostReads";
import { MostReadCardContainer } from "./styles";

interface IMostReadCardProps {
    position: number
    size: "130px" | "100px"
    data: IMostRead
}

const MostReadCard = ({ position, size, data}: IMostReadCardProps) => {
    return (
        <MostReadCardContainer size={size} url_image={data.url_image}>
            <div className="mrc__image-container">
                <span className="rank">#{position}</span>
                <figure></figure>
            </div>

            <div className="mrc__info">
                <h2>{data.title}</h2>
                <span className="category">{data.category}</span>
            </div>
        </MostReadCardContainer>
    )
}

export default MostReadCard;