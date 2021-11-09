import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography, Box } from '@mui/material';

const Banner = () => {
    const bannerBg = {
        background: `url(${bg})`,

    }


    const verticalCenter = {

        display: 'flex',
        alignItems: 'center',
        height: 400

    }

    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            starts Here
                            <Typography variant="h6" sx={{ fontSize: 13, fontWeight: 300, color: 'gray' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas
                            </Typography>
                            <Button style={{ backgroundColor: 'rgba(92, 231, 237 )' }} variant="contained">Get Appointment</Button>

                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;