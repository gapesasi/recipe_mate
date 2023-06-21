import React from "react";

import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function CustomPasswordTextField({
  showPassword: showPassword,
  params: params,
  handleClickShowPassword: handleClickShowPassword,
}) {
  return (
    <FormControl sx={{ width: "100%", mt: 2 }} variant="outlined">
      <InputLabel htmlFor="password" required>
        Password
      </InputLabel>
      <OutlinedInput
        id="password"
        type={showPassword ? "text" : "password"}
        {...params}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}
