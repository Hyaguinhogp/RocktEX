import { useEffect, useRef, useState } from "react";
import GameCard from "../GameCard";
import { GamesOnSaleContainer, GamesOnSaleContent } from "./styles";
import { motion } from "framer-motion";
import { IGame } from "../../interfaces/Games";
import api from "../../services/api";

interface IGamesOnSaleProps {
    Games: IGame[]
}

const GamesOnSale = ({ Games }: IGamesOnSaleProps) => {

    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [games, setGames] = useState<IGame[]>([]);

    useEffect(() => {
        setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
        api.get("/games/")
        .then((res) => {
            console.log(res.data);
            setGames(res.data);
        })
    }, [])

    return (
        <GamesOnSaleContainer>
            <GamesOnSaleContent>
                <div className="gos_title_container">
                    <div className="blue-circle"></div>
                    <h2 className="gos_title">Jogos em promoção</h2>
                </div>

                <motion.div 
                    className="carousel-container"
                    ref={carousel}
                >
                    <motion.div 
                        className="carousel"
                        drag="x"
                        dragConstraints={{ right: 0, left: -width}}
                    >
                        {games.map((game, index) => <GameCard key={index} game={game} />)}
                    </motion.div>
                </motion.div>
            </GamesOnSaleContent>
        </GamesOnSaleContainer>
    )
}

export default GamesOnSale;