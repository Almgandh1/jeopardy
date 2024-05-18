import { Grid, Typography,} from '@mui/material'
import MainCard from "../organisms/Board"
import React from 'react'
import UserScores from '../organisms/UserScores'

type PageTwoProps = {
  title: string;
  alecScore: number;
  setAlecScore: React.Dispatch<React.SetStateAction<number>>;
  kunfiScore: number;
  setKunfiScore: React.Dispatch<React.SetStateAction<number>>;
  timosScore: number;
  setTimosScore: React.Dispatch<React.SetStateAction<number>>;
  ronScore: number;
  setRonScore: React.Dispatch<React.SetStateAction<number>>;
  nevioScore: number;
  setNevioScore: React.Dispatch<React.SetStateAction<number>>;
}

const PageTwo = ({ title, alecScore, setAlecScore, kunfiScore, setKunfiScore, timosScore, setTimosScore, ronScore, setRonScore, nevioScore, setNevioScore }: PageTwoProps) => {

  return (
      <Grid container sx={{ display: 'flex' }}>
        <Grid item sx={{textAlign: "center", flex: 1, marginTop: "10px"}}>
          <Typography variant='h1'>{title}</Typography>
        </Grid>
        <Grid item sx={{margin: "20px"}}>
          <MainCard />
        </Grid>
        <Grid item sx={{margin: "20px", flex: 1}}>
        <UserScores alecScore={alecScore} setAlecScore={setAlecScore} kunfiScore={kunfiScore} setKunfiScore={setKunfiScore} 
          timosScore={timosScore} setTimosScore={setTimosScore} ronScore={ronScore} setRonScore={setRonScore} nevioScore={nevioScore} setNevioScore={setNevioScore}/>
        </Grid>
      </Grid>
  )
}

export default PageTwo