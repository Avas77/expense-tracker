import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import useStyles from "./styles";

interface ISnackbarProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const CustomizedSnackbar = ({ open, setOpen }: ISnackbarProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <MuiAlert
          onClose={() => setOpen(false)}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction added successfully
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
