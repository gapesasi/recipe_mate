import React, { useState } from "react";
import "./SignIn.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import CompleteLogo from "../images/CompleteLogo.png";
import {
  UseEmailTextField,
  UsePasswordTextField,
  usePassword,
} from "../hooks/loginHooks";
import { useAlert } from "../hooks/alertHooks";
import CustomAlert from "../components/alert/CustomAlert";
import CustomPasswordTextField from "../components/alert/CustomPasswordTextField";

export default function SignIn() {
  const navigate = useNavigate();

  const { reset: resetEmail, ...email } = UseEmailTextField("email");
  const { reset: resetPassword, ...password } =
    UsePasswordTextField("password");
  const { showPassword, handleClickShowPassword } = usePassword();

  const alert = useAlert();
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = () => {
    console.log(email.value);
    console.log(password.value);

    if (!password.value || !email.value) {
      setAlertSeverity("error");
      setAlertTitle(`Campos não preenchidos`);
      setAlertMessage("Verifique e tente novamente.");
      alert.handleOpen();

      return;
    } else {
      alert.handleClose();
    }

    if (!email.error) {
      resetEmail();
      resetPassword();
      navigate("/home");
    }
  };

  return (
    <Box className="sign-in">
      <Box className="sign-in__form">
        <img id="sign-in__logo" src={CompleteLogo} alt="" />
        <CustomAlert
          params={alert}
          severity={alertSeverity}
          title={alertTitle}
          message={alertMessage}
        />
        <Box className="sign-in__form--field">
          <TextField
            {...email}
            fullWidth
            required
            type="email"
            label="E-mail"
          />
          <Typography color="error">
            {email.error ? "E-mail inválido" : ""}
          </Typography>
        </Box>

        <CustomPasswordTextField
          showPassword={showPassword}
          params={password}
          handleClickShowPassword={handleClickShowPassword}
        />

        <Button
          fullWidth
          id="sign-in__form--submit"
          variant="contained"
          onClick={handleSubmit}
        >
          Login
        </Button>

        <NavLink id="sign-in__form--link">Forgot Password?</NavLink>
      </Box>
    </Box>
  );
}
