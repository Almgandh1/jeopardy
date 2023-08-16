import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from 'react'

const MainCard = () => {

    const Item = styled(Paper)(() => ({
        backgroundColor: '#98d6a9',
        padding: 8,
        textAlign: 'center',
        color: 'black',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        display: 'flex',
        fontWeight: '600',
      }));

  return (
    <>
    <Grid container spacing={4}>

      <Grid item xs={2}>
        <Item elevation={3}>200$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>200$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>200$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>200$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>200$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>200$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>400$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>400$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>400$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>400$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>400$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>400$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>600$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>600$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>600$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>600$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>600$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>600$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>800$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>800$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>800$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>800$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>800$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>800$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>1000$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>1000$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>1000$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>1000$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>1000$</Item>
      </Grid>

      <Grid item xs={2}>
        <Item elevation={3}>1000$</Item>
      </Grid>
    </Grid>
  </>
)
}

export default MainCard