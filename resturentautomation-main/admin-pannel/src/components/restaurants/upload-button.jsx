import React from "react";
//mui components
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';

function uploadButton(){
  return(
    <Tooltip title="Uplaod" placement="top-start"><Button variant="text" size="small" onClick={null} sx={{color:"white",marginLeft:10,position:'relative',left:5}} startIcon={<FileUploadIcon/>}>
    </Button></Tooltip>
  )
}
export default uploadButton;
