import React from "react";
//mui components
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function downloadButton(){
  return(
    <Tooltip title="Download" placement="top-start"><Button variant="text" size="small" onClick={null} sx={{color:"white",marginLeft:10,position:'relative',left:5}} startIcon={<FileDownloadIcon/>}>
    </Button></Tooltip>
  )
};
export default downloadButton;
