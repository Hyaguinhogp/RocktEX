import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import GamesOnSale from "../../components/GamesOnSale";
import HighlightTitle from "../../components/HighlightTitle";
import Highlights from "../../components/Highlights";
import MostRead from "../../components/MostRead";
import Navbar from "../../components/Navbar";
import { GamesData, HighlightsData, MostReads } from "../../database";
import { DefaultPage } from "../../styles/global";
import { AnimatePresence } from "framer-motion";

const Home = () => {

    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const activeDropdown = () => {
        setIsDropdownActive(true);
    }

    const desactiveDropdown = () => {
        setIsDropdownActive(false);
    }

    return(
        <DefaultPage>
            <AnimatePresence>   
                {isDropdownActive && <Dropdown desactiveDropdown={desactiveDropdown} />}
            </AnimatePresence>
            <Navbar activeDropdown={activeDropdown} />
            <HighlightTitle />
            <Highlights highlights={HighlightsData} />
            <GamesOnSale Games={GamesData} />
            <MostRead most_reads={MostReads} />
        </ DefaultPage>
    )
}

export default Home;