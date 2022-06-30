import React, { useState } from 'react'
import { Paper } from '@mui/material';
import {Tabs} from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {Typography} from '@mui/material';
import Login from '../components/Login'
import Signup from '../components/Signup' 

function Signinsignup({setUserLogin}){
const [value,setValue]=useState(0)
function handleChange(event, newValue){
    setValue(newValue);
  };

  const paperStyle={width:340,margin:"20px auto"}
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
    return (
        <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="Sign In" />
         
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>
       <Login handleChange={handleChange} setUserLogin={setUserLogin}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Signup/>
      </TabPanel>
      </Paper>
      
    )
}


export default Signinsignup;