import GamesOnSale from "../../components/GamesOnSale";
import Highlights from "../../components/Highlights";
import Navbar from "../../components/Navbar";
import { GamesData, HighlightsData } from "../../database";
import { DefaultPage } from "../../styles/global";

const Home = () => {
    return(
        <DefaultPage>
            <Navbar />
            <Highlights highlights={HighlightsData} />
            <GamesOnSale Games={GamesData} />
        </ DefaultPage>
    )
}

export default Home;