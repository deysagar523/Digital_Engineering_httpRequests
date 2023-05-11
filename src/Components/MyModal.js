import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

// Define the modal styles
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function MyModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // Define the open and close functions
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className={classes.paper}>
          <h2 id="modal-title">Modal Title</h2>
          <p id="modal-description">
            This is the content of the modal. You can add whatever you like here.
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default MyModal;
