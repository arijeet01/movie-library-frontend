import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Dropdown from "./Dropdown"
import { useState } from 'react';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ChildModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const btnAndTextStyle={margin:'8px 0'};
    const [listname, setListName] = useState("");
    const movie=props.movie;

    function handleChange(event){
        const {name, value}=event.target;

        setListName(prev=>{
            return {
            ...prev,
            [name]: value
           }
        });
    }

    function createList(){
        axios.post("http://localhost:9002/list", listname,movie )
        .then( res=> { 
            console.log(movie);
        });
    }

    return (
      <React.Fragment>
        <Button fullWidth= "true" onClick={handleOpen}>+ Create a new List</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Enter details</h2>
            <TextField name="listname" style={btnAndTextStyle}  label="List Name" placeholder="Enter list name" fullWidth="true" autoComplete="off" required onChange={handleChange} value={listname}/>
            <Dropdown></Dropdown>
            <Button type="submit" color="primary" fullWidth="true" variant="contained" style={btnAndTextStyle} onClick={createList}>Create List</Button>
                
            <Button fullWidth="true" onClick={handleClose}>Close Creation</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }

function Listmodal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <Button style={btnStyle} onClick={handleOpen}>+ Add to your list</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Save to ...
            </Typography>
            <Button style={btnStyle}>List 1</Button> <br/>
            <Button style={btnStyle}>List 2</Button> <br/>
            <Button style={btnStyle}>List 3</Button> 
            <ChildModal movie={props.movie}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Listmodal;