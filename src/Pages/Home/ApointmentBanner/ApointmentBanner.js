import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentbanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, .6)',
    backgroundBlendMode: 'darken, luminosity',

    marginTop: 150
}

const ApointmentBanner = () => {
    return (
        <Box style={appointmentbanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-115px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 3 }} style={{ color: 'rgba(92, 231, 237 )' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 2 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas
                        </Typography>
                        <Button style={{ backgroundColor: 'rgba(92, 231, 237 )' }} variant="contained">Learn More</Button>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
};

export default ApointmentBanner;