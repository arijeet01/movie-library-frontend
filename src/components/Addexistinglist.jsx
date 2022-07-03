import { Button } from "@mui/material";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Addexistinglist(props){
    

const btnStyle={  textAlign: "center",
marginTop: "5px",
width: "100%",
backgroundColor: '#14C38E',
border: "none",
outline: "none",
color: "white"
};

const [lists, setLists] = useState();
const [addd, setAdd]= useState('');

        axios.post("http://localhost:9002/list",props.user )
        .then( res=> { 
            setLists(res.data);
        });



function addExisting(list){
    const movie=props.movie;
    const existingList={list, movie};
    axios.post("http://localhost:9002/addexisting", existingList )
    .then( res=> { 
       
    }); 
     props.handleClose();
   window.location.reload();
}

    return(
        <div>
            {lists?.length ? 
                    lists.map((list)=>
                        <Button onClick={()=> addExisting(list)} style={btnStyle}>{list.listname}</Button>
                    ) 
                    : null
            }
            {/* <Button onClick={addExisting} style={btnStyle}>Add to Existing List</Button> */}
        </div>
    )
}


// pass listID to existinglist and return movie and listID for a particular user to the backend
// view all the exiswting list which contain listID and listName(visible)
// Later this listID must be encrypted and decrypted(not now)

export default Addexistinglist;