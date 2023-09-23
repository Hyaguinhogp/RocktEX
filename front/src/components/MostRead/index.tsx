import { useEffect, useState } from "react";
import { IMostRead } from "../../interfaces/MostReads";
import { IPostBase, IPostCardData } from "../../interfaces/Post";
import MostReadCard from "../MostReadCard";
import { MostReadContent } from "./styles";
import api from "../../services/api";

const MostRead = () => {

    const [mostReads, setMostReads] = useState<IPostBase[]>([])

    useEffect(() => {
        api.get("/posts/views/")
            .then((res) => {
                setMostReads(res.data.results)
            })
    }, [])

    return (
        <MostReadContent>
            <div className="most-read__title-container">
                <h2>Mais lidos</h2>
            </div>

            <div className="most-reads">
                {mostReads?.map((mostRead, index) => (
                    <MostReadCard key={index} position={index + 1} size={index == 0 ? "130px" : "100px"} data={mostRead} />)
                )}
            </div>

            <h3 className="read-more">Ler mais...</h3>
        </MostReadContent>
    )
}

export default MostRead;