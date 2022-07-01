import React, {useState} from "react";
import styled from "@emotion/styled";
import Moviecomponent from "./Moviecomponent";
import axios from "axios";
import Movieinfo from "./Movieinfo";


const Container= styled.div`
    display: flex;
    flex-direction: column;
`;

const Fav= styled.h1`
        width: 100%;
`;
const Header= styled.div`
    display: flex;
    flex-direction: row;
    background-color: #0AA1DD;
    justify-content: space-between;
    color: white;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 3px 6px 0 #555;
`;

const Apptitle= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 500px;
    height: 50px;
`;

const MovieImage = styled.img`
    width: 48px;
    height:48px;
    margin: 15px;
`;

const SearchBox = styled.div`
    display:flex;
    flex-direction:row;
    padding: 10px 10px;
    background-color: white;
    border-radius: 6px;
    margin-left: 20px;
    width: 50%;
    align-items: center;
    width: 300px;
    height: 25px;
`;

const SearcIcon = styled.img`
    width: 32px;
    height: 32px;
`;

const SearchInput=styled.input`
    color: black;
    font-size: 16px;
    font-weight: bold;
    border: none;
    outline: none;
    margin-left: 15px;
`;

const MovieListContainer=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    gap: 24px;
    justify-content: space-evenly;
`;

function Home(props){

    const [searchQuery, updateSearchQuery]= useState();
    const [timeoutId, updateTimeoutId]= useState();
    const [movieList, updateMovieList] = useState([]);
    const [selectedMovie, onMovieSelect] = useState();
    const [favourites, setFavourites] = useState([]);

    const fetchData= async (searchString) => {
        const response= await axios.get(`
        http://www.omdbapi.com/?s=${searchString}&apikey=${props.apikey}`
        );
        updateMovieList(response.data.Search)
    };

    function onTextChange(event){
        clearTimeout(timeoutId);
        updateSearchQuery(event.target.value);
        const timeout=setTimeout(() => 
            fetchData(event.target.value)
        , 500);
        updateTimeoutId(timeout);
    };

    const handleList = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
    };

    return(
        <Container>
            <Header>
                <Apptitle>
                    <MovieImage src="/movie-icon.svg" />
                    Welcome {props.user.name}
                </Apptitle>
                <SearchBox>
                    <SearcIcon src="/search-icon.svg" />
                    <SearchInput placeholder="Search movie" value={searchQuery} onChange={onTextChange}/>
                </SearchBox>
            </Header>
            {selectedMovie && <Movieinfo selectedMovie={selectedMovie} apikey={props.apikey} onMovieSelect={onMovieSelect}/>}
            <MovieListContainer>
                    {movieList?.length
                        ? movieList.map((movie, index) => 
                            <Moviecomponent key={index} 
                                            movie={movie} 
                                            onMovieSelect={onMovieSelect}
                                            handleList={handleList}
                            />)
                        : null
                    }
                    {favourites?.length ? <Fav>{props.user.name}'s List</Fav> : "No movie in your list yet! Search one to add to your list." }
                    
                    {favourites?.length ? 
                        favourites.map((favourite, index) =>
                         <Moviecomponent key={index} 
                                        movie={favourite} 
                                        onMovieSelect={onMovieSelect}
                        />
                        )
                        : null
                        }
            </MovieListContainer>
        </Container>
    );
}

export default Home;