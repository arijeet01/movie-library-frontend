import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Moviecomponent from "./Moviecomponent";

const MovieListContainer=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    gap: 24px;
    justify-content: space-evenly;
`;


function PublicList(props){
    const {listname}=useParams();
    const [list, setList] = useState();

    axios.post("https://arijeetmoviehub.herokuapp.com/publiclist", listname)
    .then( res=> { 
        setList(res.data);
    });
    const movielist=list.movielist;
    return (
       <MovieListContainer>
                    {movielist?.length
                        ? movielist.map((movie, index) => 
                            <Moviecomponent key={index} 
                                            movie={movie} 
                            />) : null }
        </MovieListContainer>
    );
}       

export default PublicList;