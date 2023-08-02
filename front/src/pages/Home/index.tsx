import DefaultPageComponent from "../../components/DefaultPageComponent";
import GamesOnSale from "../../components/GamesOnSale";
import HighlightTitle from "../../components/HighlightTitle";
import Highlights from "../../components/Highlights";
import MiniPost from "../../components/MiniPost";
import MostRead from "../../components/MostRead";
import MostReadSection from "../../components/MostReadSection";
import { GamesData, HighlightsData, MostReads, PostsCardData } from "../../database";

const Home = () => {

    return (
        <DefaultPageComponent>
            <HighlightTitle />
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