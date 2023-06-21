import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import React from "react";

export default function CustomAlert({
  params: params,
  severity: severity,
  title: title,
  message: message,
}) {
  return (
    <Collapse sx={{ width: "100%", mb: 1 }} in={params.open}>
      <Alert
        severity={severity}
        action={
          <IconButton color="inherit" size="small" onClick={params.onClick}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2, width: "90%" }}
      >
        <AlertTitle>{title}</AlertTitle>

        {message}
      </Alert>
    </Collapse>
  );
}
