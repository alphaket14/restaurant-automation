import React, { useState, useCallback } from "react";
import {
  Input,
  TextField,
  Grid,
  Button,
  Select,
  MenuItem,
  IconButton,
  Checkbox,
  FormControl,
  FormControlLabel,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import DownloadIcon from "@mui/icons-material/Download";

const ModuleDefault = (props) => {
  const [module, setModule] = useState();

  const onDropModule = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setModule(acceptedFiles[0]);
  });

  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    onDrop: onDropModule,
    multiple: false,
    accept: ".zip, .rar, .gz"
  });

  const cards = [
    {
      title: "QR Order Management",
      price: "40.00",
      description: "Customers can order food by login to Facebook.",
      image: "/static/mock-images/products/product_13.jpg"
    },
    {
      title: "QR Order Management",
      price: "40.00",
      description: "Customers can order food by login to Facebook.",
      image: "/static/mock-images/products/product_13.jpg"
    },
    {
      title: "QR Order Management",
      price: "40.00",
      description: "Customers can order food by login to Facebook.",
      image: "/static/mock-images/products/product_13.jpg"
    },
    {
      title: "QR Order Management",
      price: "40.00",
      description: "Customers can order food by login to Facebook.",
      image: "/static/mock-images/products/product_13.jpg"
    },
    {
      title: "QR Order Management",
      price: "40.00",
      description: "Customers can order food by login to Facebook.",
      image: "/static/mock-images/products/product_13.jpg"
    },
    {
      title: "QR Order Management",
      price: "40.00",
      description: "Customers can order food by login to Facebook.",
      image: "/static/mock-images/products/product_13.jpg"
    },
    {
      title: "QR Order Management",
      price: "40.00",
      description: "Customers can order food by login to Facebook.",
      image: "/static/mock-images/products/product_13.jpg"
    },
    {
      title: "QR Order Management",
      price: "40.00",
      description: "Customers can order food by login to Facebook.",
      image: "/static/mock-images/products/product_13.jpg"
    }
  ];

  return (
    <>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",

          margin: "10px 0px"
        }}
      >
        <Grid
          item
          container
          style={{
            borderBottom: "1px solid grey",
            padding: "5px 10px",
            justifyContent: "space-between"
          }}
        >
          <Grid item alignSelf="center">
            User List
          </Grid>
          <Grid item>
            <Button variant="contained" startIcon={<DownloadIcon />}>
              Download
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{
            boxSizing: "border-box",
            padding: "20px 20px",
            margin: "20px 0px"
          }}
          direction="column"
          rowGap={2}
        >
          <Grid container item spacing={3}>
            <Grid item container xs={3}>
              <Grid item xs={12}>
                Purchase Key
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth placeholder="Purchase key" size="small" />
              </Grid>
            </Grid>
            <Grid item container xs={3}>
              <Grid item xs={12}>
                Module (.zip | .rar | .gz)
              </Grid>
              <Grid item xs={12}>
                <div
                  {...getRootProps()}
                  style={{
                    cursor: "pointer",
                    border: isDragReject
                      ? "1px dashed red"
                      : isDragAccept
                      ? "1px dashed green"
                      : "1px dashed grey",
                    padding: 5,
                    borderRadius: 10,
                    height: 40
                  }}
                >
                  <input {...getInputProps()} />
                  {isDragReject ? (
                    <span>File not Supported.</span>
                  ) : (
                    <>
                      <span>Drag and Drop.</span>
                    </>
                  )}
                  {module ? (
                    <span style={{ color: "green", marginTop: 10 }}>{module?.name} Selected.</span>
                  ) : null}
                </div>
              </Grid>
            </Grid>

            <Grid item alignSelf="end">
              <FormControl>
                <FormControlLabel control={<Checkbox />} label="Overwrite" />
              </FormControl>
            </Grid>
            <Grid item alignSelf="end">
              <Button variant="contained">Add More</Button>
            </Grid>
          </Grid>
          <hr color="grey" />
          <Grid item container spacing={3}>
            {cards.map((card, id) => (
              <Grid item xs={6} sm={4} lg={4} xl={3}>
                <Card fullWidth>
                  <CardMedia component="img" height="200" image={card.image}></CardMedia>
                  <CardContent style={{ padding: 10 }}>
                    <Grid item container style={{ marginBottom: 8 }}>
                      <Grid item xs={9}>
                        <Typography variant="h6" component="div">
                          {card.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" component="div" color="primary">
                          ${card.price}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" component="div" color="text.secondary">
                        {card.description}
                      </Typography>
                    </Grid>
                  </CardContent>
                  <CardActions style={{ paddingLeft: 10, marginBottom: 10 }}>
                    <Button variant="contained">Buy Now</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ModuleDefault;
