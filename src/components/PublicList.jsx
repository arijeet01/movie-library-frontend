import React from "react";
import { useParams } from "react-router-dom";

function PublicList(props){
    const {listname}=props.match.params;
    return(<div>
        Hello you are in {listname}
    </div>)
}       

export default PublicList;