import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Login.css";
import student from "./images/students.jpg";
import { Link } from "react-router-dom";

const StudentLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <div className="formContainer">
        <h1>Student Login</h1>
        <div className="imgLogin">
          <img
            src={student}
            alt="admin"
            width={150}
            height={150}
            className="img"
          />
        </div>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <div className="content">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </Box>
            <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Stack spacing={2} direction="row">
              <Link to="/student/dashboard" className="link">
                <Button
                  variant="contained"
                  sx={{ m: 1, width: "40ch", height: "5ch" }}
                >
                  Login
                </Button>
              </Link>
            </Stack>
          </div>
        </Box>
      </div>
    </div>
  );
};
export default StudentLogin;
