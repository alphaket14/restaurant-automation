import React, { useState, useCallback, Component } from "react";
import { Input, TextField, Select, MenuItem, Grid, Button, IconButton } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import EditIcon from "@mui/icons-material/Edit";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
export default class CommonSetting extends Component{
  constructor(props){
    super(props);
  this.onChangeEmail = this.onChangeEmail.bind(this);
  this.onChangeMobile = this.onChangeMobile.bind(this);
  this.onChangePhone = this.onChangePhone.bind(this);
  this.onChangeAddress = this.onChangeAddress.bind(this);
  this.onChangePowerby = this.onChangePowerby.bind(this);
  this.onSubmit=this.onSubmit.bind(this);
  this.state = { 
    email:"",
    mobile: null,
    phone: null,
    address:"",
    powerby:"",
  };
  }
  //const [email, setEmail] = useState();
  //const [mobile, setMobile] = useState();
  //const [phone, setPhone] = useState();
  //const [address, setAddress] = useState();
  //const [powerby, setPowerby] = useState();
  //const [submit, setSubmit] = useState();
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    });
  }
  onChangeMobile(e){
    this.setState({
      mobile: e.target.value
    });
  }
  onChangePhone(e){
    this.setState({
      phone: e.target.value
    });
  }
  onChangeAddress(e){
    this.setState({
      address: e.target.value
    });
  }
  onChangePowerby(e){
    this.setState({
      powerby: e.target.value
    });
  }
  onSubmit(e){
    e.preventDefault();
    const restaurant ={
      email: this.state.email,
      mobile: this.state.mobile,
      phone: this.state.phone,
      address: this.state.address,
      powerby: this.state.powerby,
    }
    console.log(restaurant);
    axios.post('http://localhost:5000/restaurant/add', restaurant)
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
  }
  //const [logo, setLogo] = useState();
  /*logoupload = () =>{
    this.setState({
      onDropLogo : useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        logo: acceptedFiles[0];
      })
    })
    const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
      onDrop: onDropLogo,
      multiple: false,
      accept: "image/jpg,image/jpeg,image/png"
    });
  }*/
  render() {
    /*const [logo, setLogo] = useState();
    const onDropLogo = useCallback((acceptedFiles) => {
      console.log(acceptedFiles);
      setLogo(acceptedFiles[0]);
    });
  
    const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
      onDrop: onDropLogo,
      multiple: false,
      accept: "image/jpg,image/jpeg,image/png"
    });*/
  return (
    <>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",

          margin: "20px 0px"
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
            Web Setting
          </Grid>
          <Grid item>
            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <EditIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <ControlCameraIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <CachedIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <RemoveIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <FullscreenIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container spacing={5} style={{ boxSizing: "border-box", padding: "20px 0" }}>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Email Address
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField 
                fullWidth size="small" 
                type="text" 
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Mobile
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField 
                fullWidth size="small" 
                type="text" 
                required
                className="form-control"
                value={this.state.mobile}
                onChange={this.onChangeMobile}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Phone
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField 
                fullWidth size="small" 
                type="text" 
                required
                className="form-control"
                value={this.state.phone}
                onChange={this.onChangePhone}
              />
            </Grid>
          </Grid>

          {/*<Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Logo
            </Grid>
            <Grid item xs={7}>
              <div
                //{...getRootProps()}
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
                {logo ? (
                  <p style={{ color: "green", marginTop: 10 }}>{logo?.name} Selected.</p>
                ) : null}
              </div>
            </Grid>
                </Grid>*/}
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Website ON/OFF
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <Select fullWidth size="small"></Select>
            </Grid>
          </Grid>

          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Membership Enable
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <Select fullWidth size="small"></Select>
            </Grid>
          </Grid>

          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Address
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField
                fullWidth
                size="small"
                multiline
                rows={3}
                rowsMax={5}
                placeholder="Powered By Text"
                required
                className="form-control"
                value={this.state.address}
                onChange={this.onChangeAddress}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Powered By Text
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField
                fullWidth
                size="small"
                multiline
                rows={3}
                rowsMax={5}
                placeholder="Footer Text"
                required
                className="form-control"
                value={this.state.powerby}
                onChange={this.onChangePowerby}
              />
            </Grid>
          </Grid>
          <Grid item container xs={10} spacing={1} style={{ justifyContent: "right" }}>
            <Grid item style={{ alignSelf: "center" }}>
              <Button variant="outlined">Reset</Button>
            </Grid>
            <Grid item style={{ alignSelf: "center" }}>
              <Button variant="contained" onClick={this.onSubmit}>Save</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
}
