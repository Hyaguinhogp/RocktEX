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
                setResultPosts(res.data.results)
            })
    }, [searchParams])

    return (
        <DefaultPageComponent>
            <SearchPostsContainer>
                <SearchPostsContent>
                    <div className="search-top-container">
                        <h1>Resultados para <span className="search-string">"{searchParams.get("search")}":</span></h1>
                        {resultPosts.length != 0 ?
                            <div className="posts">
                                {resultPosts.map((post) => <PostCard key={post.id} postData={post} color="black" />)}
                            </div>
                            :
                            <h2 className="no-results">Sem resultados!</h2>
                        }
                    </div>
                    
                    {resultPosts.length != 0 &&
                        <div className="result-pages">
                            <p>anterior</p>
                            <p>1</p>
                            <p>próxima</p>
                        </div>
                    }
                </SearchPostsContent>
            </SearchPostsContainer>
        </DefaultPageComponent>
    )
}

export default Search;