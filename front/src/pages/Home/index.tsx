import DefaultPageComponent from "../../components/DefaultPageComponent";
import GamesOnSale from "../../components/GamesOnSale";
import HighlightTitle from "../../components/HighlightTitle";
import Highlights from "../../components/Highlights";
import MiniPost from "../../components/MiniPost";
import MostRead from "../../components/MostRead";
import { GamesData, HighlightsData, MostReads } from "../../database";
import MostReadSection from "../../components/MostReadSection";

const Home = () => {

    return (
        <DefaultPageComponent>
            <HighlightTitle />
            <Highlights highlights={HighlightsData} />
            <GamesOnSale Games={GamesData} />
            <MostReadSection>
                <MostRead most_reads={MostReads} />
                <MiniPost />
            </MostReadSection>
        </DefaultPageComponent>
    )
}

export default Home;