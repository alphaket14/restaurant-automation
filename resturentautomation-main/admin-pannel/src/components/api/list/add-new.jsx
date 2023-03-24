import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';

//custom component
import Form from "./add-new-form.jsx";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
    <Box display="flex" justifyContent="right" sx={{marginTop:2,marginRight:2.8}}>
      <Button variant="text" onClick={handleClickOpen} startIcon={<AddIcon/>} size="small">
        <i>Add New</i>
      </Button>
    </Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {/*to change title of dialog box according to category and add data in database accordingly*/}
          Add New
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <Form/>
          </Typography>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Add to list
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
