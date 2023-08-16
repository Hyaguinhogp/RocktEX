import DefaultPageComponent from "../../components/DefaultPageComponent";
import GamesOnSale from "../../components/GamesOnSale";
import Highlights from "../../components/Highlights";
import MiniPost from "../../components/MiniPost";
import MostRead from "../../components/MostRead";
import MostReadSection from "../../components/MostReadSection";
import { GamesData, HighlightsData, PostsCardData } from "../../database";

const Home = () => {

    return (
        <DefaultPageComponent>
            <Highlights highlights={HighlightsData} />
            <GamesOnSale Games={GamesData} />
            <MostReadSection>
                <MostRead most_reads={PostsCardData} />
                <MiniPost />
            </MostReadSection>
        </DefaultPageComponent>
    )
}

export default Home;