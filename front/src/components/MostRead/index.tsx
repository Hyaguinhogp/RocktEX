import { IMostRead } from "../../interfaces/MostReads";
import MostReadCard from "../MostReadCard";
import { MostReadContainer, MostReadContent } from "./styles";

interface IMostReadProps {
    most_reads: IMostRead[]
}

const MostRead = ({ most_reads }: IMostReadProps) => {

    const url = "https://sm.ign.com/ign_br/game/f/final-fant/final-fantasy-xvi_vuhy.jpg";

    return (
        <MostReadContainer>
            <MostReadContent>
                <div className="most-read__title-container">
                    <h2>Mais Lidos</h2>
                    <div className="title-detail"></div>
                </div>

                <div className="most-reads">
                    {most_reads.map((most_read, index) => <MostReadCard key={index} position={index + 1} size={index == 0 ? "130px" : "100px"} data={most_read} />)}
                </div>
            </MostReadContent>
        </MostReadContainer>
    )
}

export default MostRead;