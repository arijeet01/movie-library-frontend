import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';
import Addexistinglist from './Addexistinglist';
import Createlist from './Createlist';
import Createlistform from './Createlistform';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  height: '30%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const btnStyle={  textAlign: "center",
marginTop: "5px",
width: "100%",
backgroundColor: '#0AA1DD',
border: "none",
outline: "none",
color: "white"
};

const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
  position: absolute;
  top: 2px;
  right: 2px;
`;


function Createlistmodal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button  style={btnStyle} id="addbtn" onClick={handleOpen}>Create List</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Close onClick={handleClose}>X</Close>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Createlistform movie={props.movie} user={props.user} handleClose={handleClose} closeListModal={props.closeListModal}/>
          </Typography>
          
        </Box>
      </Modal>
    </div>
  );
}

export default Createlistmodal;