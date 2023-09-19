import { IGame } from "../../interfaces/Games";
import { calculateDiscountPercent, formatPrice } from "../../utils";
import { GameCardContainer } from "./styles";

interface IGameCardProps {
    game: IGame
}

const GameCard = ({ game }: IGameCardProps) => {
    return (
        <>
            {game && 
                <GameCardContainer url_image={game.url_image}>
                    <div className="game__image"></div>
                    <h2 className="game__title">{game.title}</h2>
                    <div className="game__price-container">
                        <h3 className="discount-percent">{game.discount}%</h3>
                        <div className="prices">
                            <h3 className="normal-price">{formatPrice(game.normal_price)}</h3>
                            <h2 className="actual-price">{formatPrice(game.current_price)}</h2>
                        </div>
                    </div>
                </GameCardContainer>}
        </>

    )
}

export default GameCard;