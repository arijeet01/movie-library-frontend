import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from "@mui/material";
import React, {useState} from "react";
import HowToRegSharpIcon from '@mui/icons-material/HowToRegSharp';
import axios from "axios";

function Signup(){
    const paperStyle = {padding: 20, height: '75vh', width: 300, margin: "0 auto"};
    const avatarStyle = {backgroundColor: '#2155CD' };
    const btnAndTextStyle={margin:'8px 0'};
    const headerStyle={margin: '0px'}

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })

    function handleChange(event){
        const {name, value}=event.target;

        setUser(prevUser=>{
            return {
            ...prevUser,
            [name]: value
           }
        });
    }

    function register(){
        const {name, email, password, confirmpassword}= user;

        setUser({
            name: "",
            email: "",
            password: "",
            confirmpassword: ""
        })

        if(password===confirmpassword){
            axios.post("http://localhost:9002/register", user)
            .then( res=> {
                alert(res.data.message);
            });

        }else{
            alert("Enter same password in confirm password");
        }

    }

    return(
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}>
                    <HowToRegSharpIcon/>
                </Avatar>
                <h2 style={headerStyle}>Sign Up</h2>
                <p>Please fill in the details to register!</p>
                </Grid>
                <TextField name="name" style={btnAndTextStyle} label="Name" placeholder="Enter your name" fullWidth="true" autoComplete="off" required value={user.name} onChange={handleChange}/>
                <TextField name="email" style={btnAndTextStyle} type="email" label="Email" placeholder="Enter email" fullWidth="true" autoComplete="off" required value={user.email} onChange={handleChange}/>
                <TextField name="password" style={btnAndTextStyle} type="password" label="Password" placeholder="Enter password" fullWidth="true" autoComplete="off" required value={user.password} onChange={handleChange}/>
                <TextField name="confirmpassword" style={btnAndTextStyle} type="password" label="Confirm Password" placeholder="Confirm password" fullWidth="true" autoComplete="off" required value={user.confirmpassword} onChange={handleChange}/>
                <Button type="submit" color="primary" fullWidth="true" variant="contained" style={btnAndTextStyle} onClick={register}>Sign Up</Button>
           </Paper>
        </Grid>
    );
}

export default Signup;