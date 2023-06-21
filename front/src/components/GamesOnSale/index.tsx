import { GamesOnSaleContainer, GamesOnSaleContent } from "./styles";

const GamesOnSale = () => {
    return (
        <GamesOnSaleContainer>
            <GamesOnSaleContent>
                <div className="gos_title_container">
                    <div className="blue-circle"></div>
                    <h2 className="gos_title">Jogos em promoção</h2>
                </div>
            </GamesOnSaleContent>
        </GamesOnSaleContainer>
    )
}

export default GamesOnSale;