import React, { useState, useCallback, useEffect } from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { useDropzone } from "react-dropzone";

import QR from "qrcode.react";

import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

const QRGenerate = (props) => {

  // useEffect(() => {
  //   const {tableNo, section} = props.params;
  //   console.log(tableNo + " " + section)
  // }, [])

  const [qrSize, setQrSize] = useState(350);

  const qrSizeChangeHandler = (event, newValue) => {
    if (typeof newValue === "number") {
      setQrSize(newValue);
    }
  };

  const [qrColor, setQrColor] = useState("#000000");

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

  return (
    <>
      <Grid container>
        <Grid item container xs={4} sx={{ p: 1, height: "100%" }}>
          <Paper sx={{ width: "100%", p: 2, height: "100%" }} elevation={12}>
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
            <Box sx={{ width: "100%", mb: 2 }}>
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
            </Box>
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
          xs={8}
          direction="column"
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            position: "fixed",
            left: "40%"
          }}
        >
          <Box sx={{ mb: 1 }} className="download-qr">
            {/* <QR ref={qrRef} value={"link"} size={qrSize} /> */}
            <QR
              value="http://facebook.github.io/react/"
              fgColor={qrColor}
              includeMargin
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
          <Button sx={{ mt: 8 }} onClick={downloadQrHandler} variant="contained">
            Download
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default QRGenerate;
