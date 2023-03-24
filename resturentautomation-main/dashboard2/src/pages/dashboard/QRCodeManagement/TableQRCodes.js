import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
  TableContainer,
  IconButton,
  Typography,
  Grid,
  Box,
  Modal,
  Backdrop,
  Fade,
  Select,
  MenuItem,
  Paper,
  FormControl,
  Slider
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";
import Scrollbar from "src/components/Scrollbar";
import { makeStyles } from "@material-ui/core";
import axios from 'axios'

import { useDropzone } from "react-dropzone";

import QR from "qrcode.react";

import downloadjs from "downloadjs";
import html2canvas from "html2canvas";


const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  },
  invoiceModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
    maxHeight: "100vh",
    overflowY: "scroll",
  },
}));

const TableQRCodes = (props) => {

 
  const navigate = useNavigate();
  


  const [openInvoiceModal, setOpenInvoiceModal] = useState(false);

  const openInvoiceModalHandler = () => {
    setOpenInvoiceModal(true);
  };

  const closeInvoiceModalHandler = () => {
    setOpenInvoiceModal(false);
  };

  const [qrSize, setQrSize] = useState(350);

  const qrSizeChangeHandler = (event, newValue) => {
    if (typeof newValue === "number") {
      setQrSize(newValue);
    }
  };

  const [qrColor, setQrColor] = useState("#000000");
  const [qrBgColor, setQrBgColor] = useState("#ffffff");

  const [qrCodeValue, setQrCodeValue] = useState("");
  // setQrCodeValue("http://facebook.github.io/react/")  

  const [qrType, setQrType] = useState(0);

  const [file, setFile] = useState();

  const [imgHeight, setImgHeight] = useState();
  const [imgWidth, setImgWidth] = useState();
  const qrImgSizeChangeHandler = (event, newValue) => {
    if (typeof newValue === "number") {
      setImgHeight(newValue);
      setImgWidth(newValue);
    }
  };
  const [imgXPosition, setImgXPosition] = useState(100);
  const qrImgXPositionChangeHandler = (event, newValue) => {
    if (typeof newValue === "number") {
      setImgXPosition(newValue);
    }
  };

  const [imgYPosition, setImgYPosition] = useState(100);
  const qrImgYPositionChangeHandler = (event, newValue) => {
    if (typeof newValue === "number") {
      setImgYPosition(newValue);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
  });

  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/jpg,image/jpeg,image/png"
  });

  const downloadQrHandler = useCallback(async () => {
    const qr = document.querySelector(".download-qr");
    if (!qr) return;

    const canvas = await html2canvas(qr);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "download.png", "image/png");
  }, []);


 
  // const rows = [
  //   { status: "Active" },
  //   { status: "Active" },
  //   { status: "Active" },
  //   { status: "Active" },
  //   { status: "Active" },
  //   { status: "Active" }
  // ];

  const [addTableModal, setAddTableModal] = useState(false);

  const openModalHandler = () => {
    setAddTableModal(true);
  };

  const closeModalHandler = () => setAddTableModal(false);

  const classes = useStyles();


    
  //For Loading the Tables Data
  const [rows, setrowsToAdd] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('http://localhost:5000/table')
      console.log("tables:",data)
      setrowsToAdd(data); 
      console.log(rows)
    };
    fetchdata();
  }, [])


  const columns = [
    { label: "Section", minWidth: 50, maxWidth: 100 },
    { label: "Table No.", minWidth: 50, maxWidth: 100 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 50, maxWidth: 100 },
    { label: "Generate", minWidth: 50, maxWidth: 100 }
  ];



  return (
    <>
      <Modal
        open={addTableModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={addTableModal}>
          <Box className={classes.modal}>
            <Typography variant="h6" sx={{ width: "100%", textAlign: "center", mb: 2 }}>
              Add Table
            </Typography>
            <Typography variant="body1" gutterBottom>
              Table No.
            </Typography>
            <TextField fullWidth placeholder="Table No." sx={{ mb: 2 }} />
            <Typography variant="body1" gutterBottom>
              Status
            </Typography>
            <Select fullWidth>
              <MenuItem>Active</MenuItem>
              <MenuItem>Inactive</MenuItem>
            </Select>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                mt: 1
              }}
            >
              <Button variant="outlined" sx={{ mr: 1 }} color="error" onClick={closeModalHandler}>
                Cancel
              </Button>
              <Button variant="contained">Save</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>



      <Modal
        open={openInvoiceModal}
        onClose={closeInvoiceModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openInvoiceModal}>
        <Box className={classes.invoiceModal}>
        <Grid container >  
           

          <Grid item container xs={5} sx={{ p: 1, height: "100%",}}>
            <Paper sx={{ width: "100%", p: 2, height: "100%", }} elevation={12}>
              <Box sx={{ width: "100%", mb: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Size
                </Typography>
                <Slider
                  min={320}
                  max={400}
                  step={1}
                  value={qrSize}
                  onChange={qrSizeChangeHandler}
                  valueLabelDisplay="auto"
                />
              </Box>
              {/* <Box sx={{ width: "100%", mb: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Whitespace
                </Typography>
                <Slider
                  min={0}
                  max={5}
                  step={1}
                  // value={qrSize}
                  // onChange={qrSizeChangeHandler}
                  valueLabelDisplay="auto"
                />
              </Box> */}
              <Box sx={{ width: "100%", mb: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Color
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  value={qrColor}
                  onChange={(e) => setQrColor(e.target.value)}
                  type="color"
                />
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Background Color
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  value={qrBgColor}
                  onChange={(e) => setQrBgColor(e.target.value)}
                  type="color"
                />
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Style
                </Typography>
                <FormControl size="small" fullWidth>
                  <Select size="small" value={qrType} onChange={(e) => setQrType(e.target.value)}>
                    <MenuItem value={0}>Round</MenuItem>
                    <MenuItem value={1}>Square</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Type
                </Typography>
                <FormControl size="small" fullWidth>
                  <Select size="small" value={qrType} onChange={(e) => setQrType(e.target.value)}>
                    <MenuItem value={0}>Square</MenuItem>
                    <MenuItem value={1}>Circle</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Type
                </Typography>
                <FormControl size="small" fullWidth>
                  <Select size="small" value={qrType} onChange={(e) => setQrType(e.target.value)}>
                    <MenuItem value={0}>Default</MenuItem>
                    <MenuItem value={1}>Image</MenuItem>
                    <MenuItem value={2}>Text</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {qrType === 1 ? (
                <>
                  <Box sx={{ width: "100%", mb: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      Drop Image
                    </Typography>
                    <div
                      {...getRootProps()}
                      style={{
                        cursor: "pointer",
                        border: isDragReject
                          ? "1px dashed red"
                          : isDragAccept
                          ? "1px dashed green"
                          : "1px dashed grey",
                        padding: 10,
                        borderRadius: 10,
                        textAlign: "center",
                        height: 100
                      }}
                    >
                      <input {...getInputProps()} />
                      {isDragReject ? (
                        <p>File not Supported.</p>
                      ) : (
                        <>
                          <p>Drag and Drop.</p>
                          <p>(.jpg, .jpeg and .png)</p>
                        </>
                      )}
                      {file ? (
                        <p style={{ color: "green", marginTop: 10 }}>{file?.name} Selected.</p>
                      ) : null}
                    </div>
                  </Box>
                  <Box sx={{ width: "100%", mb: 2 }}>
                    {file?.map((f, id) => (
                      <img
                        src={f.preview}
                        onLoad={() => {
                          URL.revokeObjectURL(f.preview);
                        }}
                      />
                    ))}
                  </Box>
                  <Box sx={{ width: "100%", mb: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      Image Size
                    </Typography>
                    <Slider
                      min={50}
                      max={150}
                      step={5}
                      value={imgHeight}
                      onChange={qrImgSizeChangeHandler}
                      valueLabelDisplay="auto"
                    />
                  </Box>
                  <Box sx={{ width: "100%", mb: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      Image Horizontal Position
                    </Typography>
                    <Slider
                      min={0}
                      max={150}
                      step={5}
                      value={imgXPosition}
                      onChange={qrImgXPositionChangeHandler}
                      valueLabelDisplay="auto"
                    />
                  </Box>
                  <Box sx={{ width: "100%", mb: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      Image Vertical Position
                    </Typography>
                    <Slider
                      min={0}
                      max={150}
                      step={5}
                      value={imgYPosition}
                      onChange={qrImgYPositionChangeHandler}
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ width: "100%", mb: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      Text
                    </Typography>
                    <TextField size="small" sx={{ width: "100%" }} />
                  </Box>
                  <Box sx={{ width: "100%", mb: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      Text Color
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      // value={qrColor}
                      // onChange={(e) => setQrColor(e.target.value)}
                      type="color"
                    />
                  </Box>
                  <Box sx={{ width: "100%", mb: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      Text Size
                    </Typography>
                    <Slider
                      min={0}
                      max={15}
                      step={1}
                      // value={qrSize}
                      // onChange={qrSizeChangeHandler}
                      // valueLabelDisplay="on"
                    />
                  </Box>
                  <Box sx={{ width: "100%", mb: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      Text Horizontal Position
                    </Typography>
                    <Slider
                      min={0}
                      max={100}
                      step={1}
                      value={50}
                      // onChange={qrSizeChangeHandler}
                      // valueLabelDisplay="on"
                    />
                  </Box>
                  <Box sx={{ width: "100%", mb: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      Text Vertical Position
                    </Typography>
                    <Slider
                      min={0}
                      max={100}
                      step={1}
                      value={50}
                      // onChange={qrSizeChangeHandler}
                      // valueLabelDisplay="on"
                    />
                  </Box>
                </>
              )}
            </Paper>
          </Grid>

          <Grid
            item
            container
            xs={6}
            direction="column"
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "fixed",
              left: "45%",
              top:"37%"
            }}
          >
            <Box sx={{ mb: 1, position:"sticky" }} className="download-qr">
              
              <QR
                value={qrCodeValue}
                fgColor={qrColor}
                includeMargin
                level='L'
                bgColor={qrBgColor}
                imageSettings={{
                  src: file && file[0].preview,
                  excavate: true,
                  height: imgHeight && imgHeight,
                  width: imgWidth && imgWidth,
                  x: imgXPosition && imgXPosition,
                  y: imgYPosition && imgYPosition
                }}
                size={qrSize}
              />
            </Box>
            <Button sx={{ mt: 8}} onClick={downloadQrHandler} variant="contained">
              Download
            </Button>
          </Grid>     
        </Grid>
      
          </Box>        
        </Fade>      
      </Modal>        



      <Grid container>
      
        <Grid
          item
          xs={12}
          sx={{ mb: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <Box>
            <TextField size="small" label="Search Section" />
          </Box>
          <Button variant="contained" sx={{ mr: 1 }} startIcon={<Add />} onClick={openModalHandler}>
            Add Table
          </Button>
        </Grid>
        <Grid
           container
           style={{
             borderRadius: 5,
             border: "1px solid grey",
             boxSizing: "border-box",
             padding: "20px 20px",
             margin: "20px 0px",
           }}
           direction="column"
           rowGap={2}
         >
           <TableContainer>
             <Scrollbar>
        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns.map((column, id) => (
                <TableCell key={id} align="center" sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
                {rows && rows?.data.map((row, id) => {
              console.log(rows);
              return (
                <TableRow>
                   <TableCell align="center">{row.section}</TableCell>
                   <TableCell align="center">{row.tableNo}</TableCell>
                   {row.status === "Enabled" ? (
                    <TableCell align="center">
                      <Button size="small" variant="contained">
                        {row.status}
                      </Button>
                    </TableCell>
                  ) : (
                    <TableCell align="center">
                      <Button color="error" size="small" variant="contained">
                        {row.status}
                      </Button>
                    </TableCell>
                  )}
                   <TableCell align="center">
                  <IconButton size="small" color="primary" onClick={openModalHandler}>
                    <Edit />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "error.main" }}>
                    <Delete />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={()=>{setQrCodeValue(`http://facebook.github.io/react/?table=${row.tableNo}&section=${row.section}`) ;openInvoiceModalHandler(id)}}
                    // onClick={() => navigate("/dashboard/qr-code/qr-generate",{
                    //   tableNo: row.tableNo,
                    //   section: row.section,
                    // })}
                  >
                    Generate
                  </Button>
                  
                </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        </Scrollbar>
        </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};
export default TableQRCodes;
