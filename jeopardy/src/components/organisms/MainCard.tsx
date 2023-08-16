import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";
import MainCardStyle from './MainCardStyle';
import { Typography } from '@mui/material';

const MainCard = () => {

  const navigate = useNavigate();

  return (
    <>
    <Grid container spacing={4}>
    
    {/**
       * Spalten Namen
       */}
    <Grid item xs={2}>
        <Typography sx={MainCardStyle.Title}>Bilder Fragen</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={MainCardStyle.Title}>Bilder Fragen</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={MainCardStyle.Title}>Bilder Fragen</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={MainCardStyle.Title}>Bilder Fragen</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={MainCardStyle.Title}>Bilder Fragen</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={MainCardStyle.Title}>Bilder Fragen</Typography>
      </Grid>

      {/**
       * 200$ Fragen
       */}
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>200$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>200$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>200$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>200$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>200$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>200$</Card>
      </Grid>

      {/**
       * 400$ Fragen
       */}
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>400$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>400$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>400$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>400$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>400$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>400$</Card>
      </Grid>

      {/**
       * 600$ Fragen
       */}
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>600$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>600$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>600$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>600$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>600$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>600$</Card>
      </Grid>

      {/**
       * 800$ Fragen
       */}
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>800$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>800$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>800$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>800$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>800$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>800$</Card>
      </Grid>

      {/**
       * 1000$ Fragen
       */}
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>1000$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>1000$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>1000$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>1000$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>1000$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={() => navigate("/main")} sx={MainCardStyle.Card}>1000$</Card>
      </Grid>
    </Grid>
  </>
)
}

export default MainCard