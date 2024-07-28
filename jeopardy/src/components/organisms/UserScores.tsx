import {  Button, Grid } from '@mui/material'
import React from 'react'
import UserCard from './UserCard'
import { useLocation, useNavigate } from 'react-router-dom'

type UserScoresProps = {
  cyrillScore: number;
  setCyrillScore: React.Dispatch<React.SetStateAction<number>>;
  tashiScore: number;
  setTashiScore: React.Dispatch<React.SetStateAction<number>>;
  timosScore: number;
  setTimosScore: React.Dispatch<React.SetStateAction<number>>;
  ronScore: number;
  setRonScore: React.Dispatch<React.SetStateAction<number>>;
  nevioScore: number;
  setNevioScore: React.Dispatch<React.SetStateAction<number>>;
}

const UserScores = ({cyrillScore, setCyrillScore, tashiScore, setTashiScore, timosScore, setTimosScore, ronScore, setRonScore, nevioScore, setNevioScore}: UserScoresProps) => {

    const navigate = useNavigate();
    let location = useLocation();
    let buttonText = location.pathname === "/round-one" ? "Weiter" : "Beenden";

    const navigatePages = () => {
      let wantedLocation = location.pathname === "/round-one" ? "/round-two" : "/scores";
      navigate(wantedLocation);
    }

  return (
    <Grid container style={{ display: 'flex', flexDirection: 'row' }} spacing={2}>
          <Grid item xs={2}>
            <UserCard title="Cyrill" score={cyrillScore} setScore={setCyrillScore}/>
          </Grid>
          <Grid item xs={2}>
            <UserCard title="Tashi" score={tashiScore} setScore={setTashiScore}/>
          </Grid>
          <Grid item xs={2}>
            <UserCard title="Timos" score={timosScore} setScore={setTimosScore}/>
          </Grid>
          <Grid item xs={2}>
            <UserCard title="Ron" score={ronScore} setScore={setRonScore}/>
          </Grid>
          <Grid item xs={2}>
            <UserCard title="Nevio" score={nevioScore} setScore={setNevioScore}/>
          </Grid>
          <Grid item xs={2} sx={{display: "flex"}}>
            <Button variant='contained' sx={{ width: "100%"}} style={{ fontSize: '50px' }} onClick={() => {navigatePages()}} >{buttonText}</Button>
          </Grid>
    </Grid>
  )
}

export default UserScores