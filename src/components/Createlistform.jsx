import React from "react";
import { TextField } from "@mui/material";
import Dropdown from "./Dropdown";
import {Button} from "@mui/material";
import axios from "axios";
import { useState } from "react";

function Createlistform(props){
    const btnAndTextStyle={margin:'8px 0'};
    const [listname, setListname] = useState('');
    const [privacy, setPrivacy] = useState('');

    function onSubmit(event){
        event.preventDefault();
        console.log(listname);
        console.log(privacy);
        console.log(props.movie);
        console.log(props.user._id);
        const list={
            //createURL,
            userId: props.user._id,
            listname: listname,
            privacy: privacy,
            movielist: props.movie
        }

        axios.post("http://localhost:9002/createlist", list)
            .then( res=> { 
                alert(res.data.message)
                // props.setUserLogin(res.data.user);
            });
            props.handleClose();
            props.closeListModal();
            window.location.reload();
    }

    function onSelect(publicc){
        setPrivacy(publicc);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <TextField name="listname" style={btnAndTextStyle} label="List Name" placeholder="Enter List name" fullWidth="true" autoComplete="off" required 
                   value={listname}
                    onInput={ e=>setListname(e.target.value)}
                />
                <Dropdown onSelect={onSelect}/>
                <Button type="submit" color="primary" fullWidth="true" variant="contained" style={btnAndTextStyle}>Create</Button>
                
            </form>
        </div>
    )
}

export default Createlistform;