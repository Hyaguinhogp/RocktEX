import { IMostRead } from "../../interfaces/MostReads";
import { IPostCardData } from "../../interfaces/Post";
import PostCard from "../PostCard";
import { MostReadCardContainer } from "./styles";

interface IMostReadCardProps {
    position: number
    size: "130px" | "100px"
    data: IPostCardData
}

const MostReadCard = ({ position, size, data}: IMostReadCardProps) => {
    return (
        <MostReadCardContainer size={size} url_image={data.url_image}>
            <div className="mrc__image-container">
                <span className="rank">#{position}</span>
            </div>

            <PostCard postData={data} />
        </MostReadCardContainer>
    )
}

export default MostReadCard;