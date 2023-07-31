import { CiSearch } from "react-icons/ci";
import { SearchContainer } from "./styles";

export interface ISearchProps {
    isMobile: boolean
}

const Search = ({ isMobile }: ISearchProps) => {

    return (
        <SearchContainer isMobile={isMobile}>
            <input type="text" className="search" placeholder="Pesquisar..." />
            <button className="search-button">
                <CiSearch />
            </button>
        </SearchContainer>
    )
}

export default Search