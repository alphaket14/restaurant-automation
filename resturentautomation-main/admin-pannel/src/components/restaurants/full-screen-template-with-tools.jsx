import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
//custom component
import Table from "./table-template.jsx";
//custom tools to be dsiplayed in full screen mode
import DownloadOption from "./download-button.jsx";
import UploadOption from "./upload-button.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Full Screen" placement="top-start"><Button variant="text" size="small" onClick={handleClickOpen} sx={{color:"white",marginLeft:10,position:'relative',left:5}} startIcon={<FullscreenIcon/>}>
      </Button></Tooltip>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>

            {/*Heading of dialog box*/}
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {props.title}
            </Typography>

            {/*Heading tools to be shown on left*/}
            <Stack direction="row" spacing={-12} sx={{marginLeft:2}}>
            <Box >
              <UploadOption sx={{marginLeft:-3}}/>
            </Box>
            <Box>
              <DownloadOption/>
            </Box>
           </Stack>
             {/*Close Button*/}
           <Tooltip title="Close" placement="top-start">
           <IconButton
             edge="start"
             color="inherit"
             onClick={handleClose}
             aria-label="close"
           >
             <CloseIcon />
           </IconButton>
           </Tooltip>
          </Toolbar>
        </AppBar>
        <br/>
        {/*Body of dialog */}
        <Table  rows={props.tableRows} columns={props.tableColumns} height={props.height} rowsPerPage={props.rowsPerPage}/>
      </Dialog>
    </div>
  );
}
