import GamesOnSale from "../../components/GamesOnSale";
import Highlights from "../../components/Highlights";
import Navbar from "../../components/Navbar";
import { GamesData, HighlightsData } from "../../database";

const Home = () => {
    return(
        <>
            <Navbar />
            <Highlights highlights={HighlightsData} />
            <GamesOnSale Games={GamesData} />
        </>
    )
}

export default Home;