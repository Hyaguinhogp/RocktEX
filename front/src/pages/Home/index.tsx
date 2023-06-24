import GamesOnSale from "../../components/GamesOnSale";
import HighlightTitle from "../../components/HighlightTitle";
import Highlights from "../../components/Highlights";
import MostRead from "../../components/MostRead";
import Navbar from "../../components/Navbar";
import { GamesData, HighlightsData } from "../../database";
import { DefaultPage } from "../../styles/global";

const Home = () => {
    return(
        <DefaultPage>
            <Navbar />
            <HighlightTitle />
            <Highlights highlights={HighlightsData} />
            <GamesOnSale Games={GamesData} />
            <MostRead />
        </ DefaultPage>
    )
}

export default Home;