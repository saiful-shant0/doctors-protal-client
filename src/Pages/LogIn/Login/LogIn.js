import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import login from '../../../images/login.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const LogIn = () => {
    const [logInData, setLogInData] = useState({});
    //const [password,setPass]=useState({});

    const { loginUser, isLoading, user, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData };
        newLoginData[field] = value;
        setLogInData(newLoginData);
    }


    const handleLogInSubmit = e => {
        loginUser(logInData.email, logInData.password, location, history)

        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container sx={{ mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        LogIn
                    </Typography>
                    <form onSubmit={handleLogInSubmit}>

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic" label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />

                        <TextField id="standard-basic"
                            sx={{ width: '75%', m: 1 }}
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button
                            sx={{ width: '75%', m: 1 }}
                            type="submit"
                            variant="contained">Log In</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/register'>
                            <Button variant="text">New User? Please Register </Button>
                        </NavLink>

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login Successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <br />
                    <br />
                    <Button onClick={handleGoogleSignIn} variant="contained">
                        Google Sign In
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default LogIn;