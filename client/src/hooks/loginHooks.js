import React, { useState } from "react";
import validateEmail from "../services/validateEmail";

export const UsePasswordTextField = (type) => {
  const [value, setValue] = useState("");

  let onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    value,
    onChange,
    reset,
  };
};

export const UseEmailTextField = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  let onChange = (event) => {
    if (!validateEmail(event.target.value)) {
      if (event.target.value) {
        setError(true);
      } else {
        setError(false);
      }
    } else {
      setError(false);
    }
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    value,
    onChange,
    reset,
    error,
  };
};

export const usePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return {
    showPassword,
    handleClickShowPassword,
  };
};
