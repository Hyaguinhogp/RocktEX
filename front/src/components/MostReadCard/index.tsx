import { MostReadCardContainer } from "./styles";

const MostReadCard = () => {
    return (
        <MostReadCardContainer>
            <div className="mrc__image-container">
                <span className="rank">#1</span>
                <figure></figure>
            </div>

            <div className="mrc__info">
                <h2>Final Fantasy XVI’s lack of diverse characters makes a huge world feel small</h2>
                <span className="category">categoria</span>
            </div>
        </MostReadCardContainer>
    )
}

export default MostReadCard;