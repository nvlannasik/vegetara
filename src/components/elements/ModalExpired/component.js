import {
  Box,
  Modal,
  Grid,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import React from "react";

export default function ModalLoginExpired({ open, handleClose, classes }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className={classes.modal}
      >
        <Grid container spacing={3} d>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
          >
            <Avatar
              variant="elips"
              className="avatar"
            >
              <WarningAmberIcon></WarningAmberIcon>
            </Avatar>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
          >
            <Typography
              variant="h6"
              className={classes.Typography}
            >
              Silahkan Login terlebih dahulu
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            container
            irection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              onClick={handleClose}
              style={{
                backgroundColor: "#7DCE13",
                color: "white",
                width: "20%",
                height: "40px",
                borderRadius: "10px",
              }}
            >
              Ok
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
