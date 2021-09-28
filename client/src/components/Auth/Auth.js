import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Icon from "./icon";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import { signin, signup } from "../../actions/auth.js";

const initalState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Auth() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initalState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    console.log("Google Success");
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      history.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try again");
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name='firstName'
                  label='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name='lastName'
                  label='Last Name'
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name='email'
              label='Email Address'
              handleChange={handleChange}
              type='email'
            />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name='confirmPassword'
                label='Repeat Password'
                handleChange={handleChange}
                type='password'
              />
            )}
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            {isSignup ? "Sign up" : " Sign in"}
          </Button>
          {/* <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color='primary'
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant='contained'>
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          /> */}
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have and account? Sign in"
                  : "Don't have and account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
