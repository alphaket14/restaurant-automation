import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Box,
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  IconButton,
  Typography,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup
} from "@mui/material";
import { useDropzone } from "react-dropzone";
const SendEmail = (props) => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [next, setNext] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  });

  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/jpg,image/jpeg,image/png"
  });

  const sendMessageComp = (
    <Grid
      container
      style={{
        borderRadius: 5,
        border: "1px solid grey",
        boxSizing: "border-box"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 2,
          width: "100%"
        }}
      >
        <Paper
          sx={{ p: 1, bgcolor: "rgba(0, 171, 85, 0.5)", cursor: "pointer" }}
          onClick={() => setNext(false)}
        >
          <Typography variant="body1">Collect Details</Typography>
        </Paper>
        <Divider sx={{ width: "7%" }} />
        <Paper sx={{ p: 1, cursor: "pointer", bgcolor: "rgba(51,102,255,0.5)" }}>
          <Typography variant="body1">Write Message</Typography>
        </Paper>
      </Box>
      <Grid item container style={{ padding: "20px 20px" }}>
        <Grid item container direction="column" rowGap={2}>
          <Grid item container spacing={3}>
            <Grid item xs={3} align="right" alignSelf="center">
              <Typography variant="body1">Will be Sent :</Typography>
            </Grid>
            <Grid item xs={8}>
              <Select fullWidth size="small">
                <MenuItem>Now</MenuItem>
                <MenuItem>Schedule</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid item container spacing={3}>
            <Grid item xs={3} align="right">
              <Typography variant="body1">Message :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth multiline rows={3} maxRows={5} placeholder="message..." />
            </Grid>
          </Grid>
          <Grid item container spacing={1} sx={{ justifyContent: "right" }}>
            <Grid item>
              <Button variant="outlined">Reset</Button>
            </Grid>
            <Grid item>
              <Button variant="contained">Send</Button>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  const sendMessageTo = (
    <Grid
      container
      style={{
        borderRadius: 5,
        border: "1px solid grey",
        boxSizing: "border-box"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 2,
          width: "100%"
        }}
      >
        <Paper sx={{ p: 1, bgcolor: "rgba(51,102,255,0.5)", cursor: "pointer" }}>
          <Typography variant="body1">Collect Details</Typography>
        </Paper>
        <Divider sx={{ width: "7%" }} />
        <Paper
          sx={{ p: 1, cursor: "pointer", bgcolor: "rgba(255, 193, 7, 0.5)" }}
          onClick={() => setNext(true)}
        >
          <Typography variant="body1">Write Message</Typography>
        </Paper>
      </Box>
      <Grid item container style={{ padding: "20px 20px" }}>
        <Grid item container direction="column" rowGap={2}>
          <Grid item container spacing={3}>
            <Grid item xs={3} align="right" alignSelf="center">
              <Typography variant="body1">Email :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small" placeholder="Email" />
            </Grid>
          </Grid>
          <Grid item container spacing={3}>
            <Grid item xs={3} align="right">
              <Typography variant="body1">Email from Group :</Typography>
            </Grid>
            <Grid item xs={8}>
              <Select size="small" fullWidth>
                <MenuItem>Group 1</MenuItem>
                <MenuItem>Group 2</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid item container spacing={3}>
            <Grid item xs={3} align="right">
              <Typography variant="body1">Upload File :</Typography>
            </Grid>
            <Grid item xs={8}>
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
                    <p>(csv, excel, text.)</p>
                  </>
                )}
                {file ? (
                  <p style={{ color: "green", marginTop: 10 }}>{file?.name} Selected.</p>
                ) : null}
              </div>
            </Grid>
          </Grid>
          <Grid item container spacing={1} sx={{ justifyContent: "right" }}>
            <Grid item>
              <Button variant="outlined">Reset</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => setNext(true)}>
                Next
              </Button>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Grid container sx={{ mb: 2 }} spacing={2}>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
              bgcolor: "rgba(0, 171, 85, 0.5)"
            }}
          >
            <Typography variant="body1">Total Email Balance</Typography>
            <Typography variant="body1">300</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
              bgcolor: "rgba(51,102,255,0.5)"
            }}
          >
            <Typography variant="body1">Total Email Sent</Typography>
            <Typography variant="body1">200</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
              bgcolor: "rgba(255, 193, 7, 0.5)"
            }}
          >
            <Typography variant="body1">Total Email Consumed</Typography>
            <Typography variant="body1">100</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
              bgcolor: "rgba(0, 171, 85, 0.5)"
            }}
          >
            <Typography variant="body1">Total Email Delivered</Typography>
            <Typography variant="body1">150</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
              bgcolor: "rgba(255, 72, 66, 0.5)"
            }}
          >
            <Typography variant="body1">Total Email Failed</Typography>
            <Typography variant="body1">50</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1
        }}
      >
        <Typography variant="h5">Send Email</Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/dashboard/marketing/email/email-history")}
        >
          Email History
        </Button>
      </Box>
      <Divider sx={{ width: "100%", mb: 2 }} />
      {next ? sendMessageComp : sendMessageTo}
    </>
  );
};
export default SendEmail;
