import { CiSearch } from "react-icons/ci";
import { SearchContainer } from "./styles";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export interface ISearchProps {
    isMobile: boolean
    desactiveDesktopDropdown: () => void
}

const Search = ({ isMobile, desactiveDesktopDropdown }: ISearchProps) => {

    const ref = useRef<HTMLInputElement>({} as HTMLInputElement);
    const navigate = useNavigate();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let search = ref.current.value;
        desactiveDesktopDropdown();
        navigate(`/search/?search=${search}`);
    }

    return (
        <SearchContainer isMobile={isMobile} onSubmit={onSubmit}>
            <input ref={ref} type="text" className="search" placeholder="Pesquisar..." />
            <button className="search-button">
                <CiSearch />
            </button>
        </SearchContainer>
    )
}

export default Search