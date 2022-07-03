import React, {useState} from "react";
import styled from "@emotion/styled";
import Moviecomponent from "./Moviecomponent";
import axios from "axios";
import Movieinfo from "./Movieinfo";
import { useEffect } from "react";
import { Button } from "@mui/material";

const Container= styled.div`
    display: flex;
    flex-direction: column;
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

const Logout={
    textAlign: "center",
    width: "150px",
   height: "45px",
backgroundColor: 'white',
border: "none",
outline: "none",
color: "blue",
marginLeft: "10px",
};



function Home(props){

    const [searchQuery, updateSearchQuery]= useState();
    const [timeoutId, updateTimeoutId]= useState();
    const [movieList, updateMovieList] = useState([]);
    const [selectedMovie, onMovieSelect] = useState();
    // const [favourites, setFavourites] = useState([]);
    const [lists, setLists] = useState();


    const fetchData= async (searchString) => {
        
        const response= await axios.get(`
        https://www.omdbapi.com/?s=${searchString}&apikey=${props.apikey}`
        );
        updateMovieList(response.data.Search)
    };
    const user=props.user;
   // console.log(user);
        axios.post("https://arijeetmoviehub.herokuapp.com/list",user )
        .then( res=> { 
            setLists(res.data);
        });


    


    function onTextChange(event){
        clearTimeout(timeoutId);
        updateSearchQuery(event.target.value);
        const timeout=setTimeout(() => 
            fetchData(event.target.value)
        , 500);
        updateTimeoutId(timeout);
    };

   
    const stl={width: '100%'};
    const divStl={display: "flex", flexDirection: "row"}
    return(
        <Container>
            <Header>
                <Apptitle>
                    <MovieImage src="/movie-icon.svg" />
                    Welcome {props.user.name}
                </Apptitle>        
                    <div style={divStl}>
                    <SearchBox>
                    <SearcIcon src="/search-icon.svg" />
                    <SearchInput placeholder="Search movie" value={searchQuery} onChange={onTextChange}/>
                     </SearchBox>
                    <Button style={Logout} onClick={props.Logout}>Logout</Button>
                    </div>    
                
                
            </Header>
            {selectedMovie && <Movieinfo selectedMovie={selectedMovie} apikey={props.apikey} onMovieSelect={onMovieSelect}/>}
            <MovieListContainer>
                    {movieList?.length
                        ? movieList.map((movie, index) => 
                            <Moviecomponent key={index} 
                                            movie={movie} 
                                            onMovieSelect={onMovieSelect}
                                            user={props.user}
                                            add="true"
                            />)
                        : null
                    }
                   
            </MovieListContainer>
             
            {lists?.length 
                        ? lists.map((list) => 
                            <MovieListContainer>
                            {list.movielist.length ?
                                <h1 style={stl}>{list.listname}</h1>: null
                            }
                            {list.movielist.map((movie, index) =>
                             <Moviecomponent
                                key={index} 
                                movie={movie} 
                                onMovieSelect={onMovieSelect}
                                user={props.user}
                                add="false"
                                list={list}
                             />) 
                            }
                            </MovieListContainer> 
                        ) 
                        : null
                    }
        </Container>
    );
}

export default Home;
   