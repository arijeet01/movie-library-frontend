import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { color } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import Listmodal from "./Listmodal";

const Moviecontainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 280px;
    box-shadow: 0 3px 10px 0 #aaa;
    cursor: pointer;
`;

const CoverImage = styled.img`
    object-fir: cover;
    height: 362px;
`;

const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InfoColumn= styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`;

const MovieInfo = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
    text-overflow: ellipsis;
`;


function Moviecomponent(props){
    const {Title, Year, imdbID, Type, Poster} = props.movie;
    



    return (
        <div>
            <Moviecontainer onClick={()=>props.onMovieSelect(imdbID)}>
            <CoverImage src={Poster} />
            <MovieName >{Title}</MovieName>
            <InfoColumn>
                <MovieInfo>Year: {Year}</MovieInfo>
                <MovieInfo>Type: {Type}</MovieInfo>
            </InfoColumn>
        </Moviecontainer>
        <Listmodal movie={props.movie} user={props.user} add={props.add} list={props.list}/>
        </div>
        
    );
}

export default Moviecomponent;