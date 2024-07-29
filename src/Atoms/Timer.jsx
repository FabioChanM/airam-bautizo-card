import '../App.css';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "August 11, 2024";
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    border: '3px solid #000A2B',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App timer">
       <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
          <Grid item xs={2} sm={3} md={3}>
            <Item>{days}</Item>
            <Box sx={{ width: '100%',
                       backgroundColor: '#000A2B',
                       color: 'white',
                       marginTop: '5px',
                       borderRadius: '5px'
             }}>Dia</Box>
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <Item>{hours}</Item>
            <Box sx={{ width: '100%',
                       backgroundColor: '#000A2B',
                       color: 'white',
                       marginTop: '5px',
                       borderRadius: '5px'
             }}>Hrs</Box>
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <Item>{minutes}</Item>
            <Box sx={{ width: '100%',
                       backgroundColor: '#000A2B',
                       color: 'white',
                       marginTop: '5px',
                       borderRadius: '5px'
             }}>Min</Box>
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <Item>{seconds}</Item>
            <Box sx={{ width: '100%',
                       backgroundColor: '#000A2B',
                       color: 'white',
                       marginTop: '5px',
                       borderRadius: '5px'
             }}>Seg</Box>
          </Grid>
        </Grid>
      </Box>
    </div>
    
  );
};

export default Timer;
