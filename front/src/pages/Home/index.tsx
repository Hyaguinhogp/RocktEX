import DefaultPageComponent from "../../components/DefaultPageComponent";
import GamesOnSale from "../../components/GamesOnSale";
import Highlights from "../../components/Highlights";
import MiniPost from "../../components/MiniPost";
import MostRead from "../../components/MostRead";
import MostReadSection from "../../components/MostReadSection";
import Presentation from "../../components/Presentation";
import { GamesData } from "../../database";

const Home = () => {

    return (
        <DefaultPageComponent falseNavbar>
            <Presentation />
            <Highlights />
            <GamesOnSale Games={GamesData} />
            <MostReadSection>
                <MostRead />
                <MiniPost />
            </MostReadSection>
        </DefaultPageComponent>
    )
}

export default Home;