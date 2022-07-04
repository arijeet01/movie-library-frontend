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
//     const [list, setList] = useState();
let list={};
    axios.post("https://arijeetmoviehub.herokuapp.com/publiclist", listname)
    .then( res=> { 
       list=res.data;
    });
    return (
       <div>{list}</div>
    );
}       

export default PublicList;