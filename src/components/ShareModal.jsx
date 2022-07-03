import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function ShareModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const stl={marginLeft: "20px"};

  return (
    <div>
        { (props.list.privacy==="public")? 
            <Button style={stl} onClick={handleOpen}>Share</Button> 
                : null
        }
        
       
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <a href={props.list.URL}>{props.list.URL}</a>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ShareModal;