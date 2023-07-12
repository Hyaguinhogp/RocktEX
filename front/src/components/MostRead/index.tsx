import { IMostRead } from "../../interfaces/MostReads";
import MostReadCard from "../MostReadCard";
import { MostReadContent } from "./styles";

interface IMostReadProps {
    most_reads: IMostRead[]
}

const MostRead = ({ most_reads }: IMostReadProps) => {

    return (
        <MostReadContent>
            <div className="most-read__title-container">
                <h2>Mais Lidos</h2>
                <div className="title-detail"></div>
            </div>

            <div className="most-reads">
                {most_reads.map((most_read, index) => (
                    <MostReadCard key={index} position={index + 1} size={index == 0 ? "130px" : "100px"} data={most_read} />)
                )}
            </div>

            <h3 className="read-more">Ler mais...</h3>
        </MostReadContent>
    )
}

export default MostRead;