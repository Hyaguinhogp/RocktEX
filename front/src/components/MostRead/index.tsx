import MostReadCard from "../MostReadCard";
import { MostReadContainer, MostReadContent } from "./styles";

const MostRead = () => {
    return (
        <MostReadContainer>
            <MostReadContent>
                <div className="most-read__title-container">
                    <h2>Mais Lidos</h2>
                    <div className="title-detail"></div>
                </div>

                <div className="most-reads">
                    <MostReadCard />
                    <MostReadCard />
                    <MostReadCard />
                </div>
            </MostReadContent>
        </MostReadContainer>
    )
}

export default MostRead;