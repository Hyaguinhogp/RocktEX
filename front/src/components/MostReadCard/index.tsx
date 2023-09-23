import { IMostRead } from "../../interfaces/MostReads";
import { IPostBase, IPostCardData } from "../../interfaces/Post";
import PostCard from "../PostCard";
import { MostReadCardContainer } from "./styles";

interface IMostReadCardProps {
    position: number
    size: "130px" | "100px"
    data: IPostBase
}

const MostReadCard = ({ position, size, data}: IMostReadCardProps) => {
    return (
        <MostReadCardContainer size={size} url_image={data.cover_image}>
            <div className="mrc__image-container">
                <span className="rank">#{position}</span>
            </div>

            <PostCard postData={data} color="white" />
        </MostReadCardContainer>
    )
}

export default MostReadCard;