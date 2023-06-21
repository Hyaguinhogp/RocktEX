import GamesOnSale from "../../components/GamesOnSale";
import Highlights from "../../components/Highlights";
import Navbar from "../../components/Navbar";
import { HighlightsData } from "../../database";

const Home = () => {
    return(
        <>
            <Navbar />
            <Highlights highlights={HighlightsData} />
            <GamesOnSale />
        </>
    )
}

export default Home;