import { Button } from "@mui/material";
import React from "react";
import Createlistmodal from "./Createlistmodal";

function Createlist(props){
    return(
        <div>
            <Createlistmodal movie={props.movie}/>
        </div>
    )
}       

export default Createlist;