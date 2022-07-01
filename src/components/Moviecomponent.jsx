import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { color } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';

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
    

  const btnStyle={  textAlign: "center",
  marginTop: "5px",
  width: "100%",
  backgroundColor: '#0AA1DD',
  border: "none",
  outline: "none",
  color: "white"
};



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
        <Button style={btnStyle} onClick={()=>props.handleList(props.movie)}><AddIcon />Add to your list</Button>
        </div>
        
    );
}

export default Moviecomponent;