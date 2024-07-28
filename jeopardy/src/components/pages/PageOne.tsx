import { Grid, Typography,} from '@mui/material'
import MainCard from "../organisms/Board"
import React from 'react'
import UserScores from '../organisms/UserScores'

type PageOneProps = {
  title: string;
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

const PageOne = ({ title, cyrillScore, setCyrillScore, tashiScore, setTashiScore, timosScore, setTimosScore, ronScore, setRonScore, nevioScore, setNevioScore }: PageOneProps) => {

  return (
      <Grid container sx={{ display: 'flex' }}>
        <Grid item sx={{textAlign: "center", flex: 1, marginTop: "10px"}}>
          <Typography variant='h1'>{title}</Typography>
        </Grid>
        <Grid item sx={{margin: "20px"}}>
          <MainCard />
        </Grid>
        <Grid item sx={{margin: "20px", flex: 1}}>
          <UserScores cyrillScore={cyrillScore} setCyrillScore={setCyrillScore} tashiScore={tashiScore} setTashiScore={setTashiScore} 
          timosScore={timosScore} setTimosScore={setTimosScore} ronScore={ronScore} setRonScore={setRonScore} nevioScore={nevioScore} setNevioScore={setNevioScore}/>
        </Grid>
      </Grid>
  )
}

export default PageOne