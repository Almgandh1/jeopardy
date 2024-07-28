import { Typography } from '@mui/material';
import React from 'react'
import FinalScoresStyle from './FinalScoresStyle';

type FinalScoresProps = {
    cyrillScore: number;
    tashiScore: number;
    timosScore: number;
    ronScore: number;
    nevioScore: number;
  }

const FinalScores = ({ cyrillScore, tashiScore, timosScore, ronScore, nevioScore}: FinalScoresProps) => {

    const finalScores = [
        {score: cyrillScore, name: "Cyrill",}, 
        {score: tashiScore, name: "Tashi"}, 
        {score: timosScore, name: "Timos"}, 
        {score: ronScore, name: "Ron"}, 
        {score: nevioScore, name: "Nevio"}
    ]

    finalScores.sort((a, b) => {
        return b.score - a.score;
    });

  return (
    <>
        <Typography variant='h2' sx={FinalScoresStyle}>Gratuliere {finalScores[0].name} du hesch mit {finalScores[0].score} Pünkt gunne!</Typography>
        <Typography variant='h2' sx={FinalScoresStyle}>Gratuliere {finalScores[1].name} du bisch mit {finalScores[1].score} Zweite worde!</Typography>
        <Typography variant='h2' sx={FinalScoresStyle}>Gratuliere {finalScores[2].name} du bisch mit {finalScores[2].score} genau ide Mitti glandet!</Typography>
        <Typography variant='h2' sx={FinalScoresStyle}>Gratuliere {finalScores[3].name} du hesch dich mit {finalScores[3].score} Pünkt vorem letschte Platz chönne rette!</Typography>
        <Typography variant='h2' sx={FinalScoresStyle}>Gratuliere {finalScores[4].name} du bisch mit {finalScores[4].score} de Sieger vo de falsche Siite worde!</Typography>
    </>
  )
}

export default FinalScores