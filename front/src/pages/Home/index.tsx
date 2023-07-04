import DefaultPageComponent from "../../components/DefaultPageComponent";
import GamesOnSale from "../../components/GamesOnSale";
import HighlightTitle from "../../components/HighlightTitle";
import Highlights from "../../components/Highlights";
import MostRead from "../../components/MostRead";
import { GamesData, HighlightsData, MostReads } from "../../database";

const Home = () => {

    return (
        <DefaultPageComponent>
            <HighlightTitle />
            <Highlights highlights={HighlightsData} />
            <GamesOnSale Games={GamesData} />
            <MostRead most_reads={MostReads} />
        </DefaultPageComponent>
    )
}

export default Home;