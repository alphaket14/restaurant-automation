import React, { useState, useEffect } from "react";
import "./Waiteraccount.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import { TextField } from "@material-ui/core";
import { Backdrop } from "@material-ui/core";
import { useNavigate } from "react-router";
import { Getwaiterdatabyid } from "../../../redux/Waiter api/WaiterAuthApi";
const WaiterGeneral = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "12px",
    backgroundColor: "#212B36",
  };

  const [open, setOpen] = useState(false);
  const initialdata = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const [newdata, setnewdata] = useState(initialdata);
  const handleChange = (e) => {
    e.preventDefault();
    setnewdata({ ...newdata, [e.target.name]: e.target.value });
    console.log(newdata);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate();
  const [data1, setdata] = useState();

  useEffect(() => {
    async function getdata() {
      const id = sessionStorage.getItem("waiterid");
      if (!id) {
        navigate("/waiter/waiterlogin");
      }
      const data = await Getwaiterdatabyid(id);
      console.log(id, data);
      setdata(data.data);
    }
    getdata();
  }, []);
  return (
    <>
      <div>
        <div className="profilebox">
          <div className="profilefield">
            <span>Email</span>
            <br />
            <div>{data1 && data1.email}</div>
          </div>
          <div className="profilefield">
            <span>FirstName</span>
            <br />
            <div>{data1 && data1.firstName}</div>
          </div>
          <div className="profilefield">
            <span>LastName</span>
            <br />
            <div>{data1 && data1.lastName}</div>
          </div>
        </div>
        <div onClick={handleOpen} className="submit">
          Update Profile
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <Typography
            sx={{ width: "100%", textAlign: "center", mb: 2 }}
            variant="h5"
          >
            Update Profile
          </Typography>
          <Grid container direction="column" rowSpacing={2}>
            <Grid item container spacing={2}>
              <Grid item xs={5} align="right" alignSelf="center">
                <Typography variant="body1">FirstName :</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  fullWidth
                  size="small"
                  name="firstName"
                  value={newdata.firstName}
                  placeholder="FirstName"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={5} align="right" alignSelf="center">
                <Typography variant="body1">LastName :</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  fullWidth
                  size="small"
                  name="lastName"
                  placeholder="LastName"
                  value={newdata.lastName}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={5} align="right" alignSelf="center">
                <Typography variant="body1">Email :</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  fullWidth
                  size="small"
                  name="email"
                  placeholder="Email"
                  value={newdata.email}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={5} align="right" alignSelf="center">
                <Typography variant="body1">Phone :</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  fullWidth
                  size="small"
                  name="phone"
                  placeholder="Phone"
                  value={newdata.phone}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{
                marginTop: "2rem",

                gap: "20px",
                alignItems: "center",
              }}
            >
              <Button variant="outlined" color="error" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  console.log("Update Profile");
                }}
                variant="contained"
                sx={{ ml: 1 }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default WaiterGeneral;
