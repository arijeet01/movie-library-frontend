import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from "@mui/material";
import React, {useState} from "react";
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import axios from "axios";
import { useNavigate} from "react-router-dom";

function Login(props){

    const paperStyle = {padding: 20, height: '60vh', width: 300, margin: "0 auto"};
    const avatarStyle = {backgroundColor: '#2155CD' };
    const btnAndTextStyle={margin:'8px 0'};

    const [user, setUser] = useState({
        username: "",
        password: "",
    })

    const navigate = useNavigate();

    function handleChange(event){
        const {name, value}=event.target;

        setUser(prevUser=>{
            return {
            ...prevUser,
            [name]: value
           }
        });
    }

    function login(){
        
        setUser({
            username: "",
            password: "",
        });

        axios.post("https://arijeetmoviehub.herokuapp.com/login", user)
            .then( res=> { 
                //  res.data.auth
                //alert(res.data.message)
                props.setUserLogin(res.data.user);
                navigate("/home");
            });
    }
    

    return(
        <Grid >
            <Paper style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}>
                    <LockOpenRoundedIcon/>
                </Avatar>
                <h2>Sign In</h2>
                </Grid>
          
                <TextField name="username" style={btnAndTextStyle}  type="email"  label="Email" placeholder="Enter username" fullWidth="true" autoComplete="off" required value={user.email} onChange={handleChange}/>
                <TextField name="password" style={btnAndTextStyle} type="password" label="Password" placeholder="Enter password" fullWidth="true" autoComplete="off" required value={user.password} onChange={handleChange}/>
                <Button type="submit" color="primary" fullWidth="true" variant="contained" style={btnAndTextStyle} onClick={login}>Sign In</Button>
                <Typography>Do you have an account?
                            <Link onClick={()=>props.handleChange("event", 1)}>
                                Sign Up
                            </Link>
                </Typography>

                
           </Paper>
        </Grid>
    );
}

export default Login;