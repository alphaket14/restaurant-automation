import React, { useState, useCallback } from "react";
import {useDropzone} from 'react-dropzone';
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Card,
  Typography,
  Grid,
  CardContent,
  CardActions,
  Button,
  TextField
} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { UploadSingleFile } from '../components/upload';
import { useFormik } from 'formik';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
const Services = () => {
  const [value, setValue] = useState("How many words?");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openCat, setOpenCat] = React.useState(false);

  const handleClickOpenCat = () => {
    setOpenCat(true);
  };

  const handleCloseCat = () => {
    setOpenCat(false);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      content: '',
      cover: null,
      tags: ['Logan'],
      publish: true,
      comments: true,
      metaTitle: '',
      metaDescription: '',
      metaKeywords: ['Logan']
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        
      } catch (error) {
        console.error(error);
      }
    }
  });

  const { errors, values, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps } = formik;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFieldValue('cover', {
          ...file,
          preview: URL.createObjectURL(file)
        });
      }
    },
    [setFieldValue]
  );


  return (
    <>
      <Helmet>
        <title>Customers | Client Portal</title>
      </Helmet>

      <Dialog
        open={open}
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add Item to Menu</DialogTitle>
        <DialogContent>
          <TextField id="outlined-basic" style={{ marginBottom: '20px' }} fullWidth label="Item Name" variant="outlined" />
          <TextField id="outlined-basic" style={{ marginBottom: '20px' }} fullWidth label="Price" variant="outlined" />

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="Select Category"
            fullWidth
            style={{ marginBottom: '20px' }}
          >
            <MenuItem value="Select Category">Select Category</MenuItem>
            <MenuItem value={20}>Category 1</MenuItem>
            <MenuItem value={30}>Category 2</MenuItem>
            <MenuItem value={30}>Category 3</MenuItem>
            <MenuItem value={30}>Category 4</MenuItem>
          </Select>


          <TextField id="outlined-basic" style={{ marginBottom: '20px' }} fullWidth multiline rows={4} label="Description" variant="outlined" />
          <h3>Photos</h3>
          <UploadSingleFile
            maxSize={3145728}
            accept="image/*"
            file={values.cover}
            onDrop={handleDrop}
            error={Boolean(touched.cover && errors.cover)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>


      <Dialog
        open={openCat}
        fullWidth
        maxWidth="sm"
        onClose={handleCloseCat}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add Categories</DialogTitle>
        <DialogContent>
          <TextField id="outlined-basic" style={{ marginBottom: '20px' }} fullWidth label="Category Name" variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCat} color="primary">
            Close
          </Button>
          <Button onClick={handleCloseCat} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>





      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          padding: "30px",
        }}
      >
        <Container maxWidth={false}>
          
            <Typography style={{ float: 'left', margin: '10px' }} variant="h4">
              Food Menu
            </Typography>
            <Button onClick={handleClickOpenCat} style={{ float: 'right', margin: '10px' }} variant="outlined" >
              Add Categories
            </Button>
            <Button onClick={handleClickOpen} style={{ float: 'right', margin: '10px' }} variant="contained" >
              Add Item to Menu
            </Button>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Menu Item</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">
                    
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                    <TableCell>Item 1</TableCell>
                    <TableCell align="right">Category 1</TableCell>
                    <TableCell align="right">599.99 ₹</TableCell>
                    <TableCell align="right">
                      <Button variant="outlined" sx={{ p: "9px" }}>
                        View Item
                      </Button>
                    </TableCell>
                  </TableRow>
              </TableBody>
            </Table>
        </TableContainer>
          
        </Container>
      </Box>
    </>
  );
};

export default Services;
