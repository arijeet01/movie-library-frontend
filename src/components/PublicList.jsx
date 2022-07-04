import React from "react";
import { useParams } from "react-router-dom";

function PublicList(props){
    const listname=useParams();
    return(<div>
        Hello you are in {listname}
    </div>)
}       

export default PublicList;