import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Download from "@mui/icons-material/Download";
import Slide from "@mui/material/Slide";
import Paper from "@mui/material/Paper";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Fullscreen(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          px: 1,
          display: "flex",
          flexDirection: "row-reverse",
          mb: 1,
          bgcolor: "rgba(51,102,255,0.5)"
        }}
      >
        <Tooltip title="Fullscreen">
          <IconButton size="small" onClick={handleClickOpen}>
            <FullscreenIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Download">
          <IconButton color="primary" size="small">
            <Download />
          </IconButton>
        </Tooltip>
      </Paper>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Box sx={{ flex: 1 }}></Box>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: "100%", p: 2 }}>{props.content}</Box>
      </Dialog>
    </>
  );
}
