import { useEffect, useState } from "react";
import DefaultPageComponent from "../../components/DefaultPageComponent";
import api from "../../services/api";
import { IPostBase } from "../../interfaces/Post";
import { useSearchParams } from "react-router-dom";
import PostCard from "../../components/PostCard";
import { SearchPostsContainer, SearchPostsContent } from "./styles";

const Search = () => {

    const [resultPosts, setResultPosts] = useState<IPostBase[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const search = searchParams.get('search');
        api.get(`/posts/search/?search=${search}`)
            .then((res) => {
                console.log(res.data)
                setResultPosts(res.data.results)
            })
    }, [])

    return (
        <DefaultPageComponent falseNavbar>
            <SearchPostsContainer>
                <SearchPostsContent>
                    <h1>Resultados para <span className="search-string">"{searchParams.get("search")}":</span></h1>
                    <div className="posts">
                        {resultPosts.length != 0 && resultPosts.map((post) => <PostCard key={post.id} postData={post} color="black" />)}
                    </div>
                    <div className="result-pages">
                        <p>anterior</p>
                        <p>1</p>
                        <p>próxima</p>
                    </div>
                </SearchPostsContent>
            </SearchPostsContainer>
        </DefaultPageComponent>
    )
}

export default Search;