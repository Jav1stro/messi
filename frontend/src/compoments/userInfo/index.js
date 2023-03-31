import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import theme from "../../theme";

import { useRouter } from "next/router";
// redux
import { useSelector, useDispatch } from "react-redux";
import { unsetUser } from "../../redux/slices/user/userSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UserInfo = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { fullName } = useSelector((state) => state.user);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    router.push("/");
    dispatch(unsetUser());
  };
  const handleLogIn = () => {
    if (router.pathname === "/auth/login") {
      setOpen(false);
    } else {
      router.push("auth/login");
    }
  };
  return (
    <div>
      <Button onClick={handleClickOpen}>
        <FaceIcon
          sx={{
            width: "100px",
            height: "100px",
            color: fullName ? `${theme.colors.blue}` : `${theme.colors.red}`,
          }}
        />{" "}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          backgroundColor: "rgba(100,100,0,0.2)",
        }}
      >
        <DialogTitle
          sx={{
            width: "280px",
            textAlign: "left",
            backgroundColor: "black",
            color: "white",
          }}
        >
          {"User Profile"}
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "black",
          }}
        >
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ color: "white", textAlign: "left" }}
          >
            {fullName ? fullName : `You have to login!`}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          {fullName ? (
            <Button onClick={handleLogOut} sx={{ color: "rgb(200,100,100)" }}>
              Logout
            </Button>
          ) : (
            <Button onClick={handleLogIn} sx={{ color: "rgb(100,200,100)" }}>
              Login
            </Button>
          )}
          <Button onClick={handleClose} sx={{ color: "rgb(200,100,100)" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserInfo;
