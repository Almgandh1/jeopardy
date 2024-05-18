import React from 'react'
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';

type UserCardProps = {
  title: string;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>
}


const UserCard = ({ title, score, setScore }: UserCardProps) => {
    return (
      <>
      <Paper sx={{mb: "10px"}}>
        <Typography variant='h3' sx={{ml:"10px", pt: "10px"}}>{title}</Typography>
        <Typography variant='h5' sx={{ml:"10px", pb: "10px"}}>Score: {score}</Typography>
      </Paper>
      <Box sx={{ display: 'flex', padding: "0px" }}>
        <Button variant='contained' onClick={() => {setScore(score + 100)}} sx={{width: "50%", mr: "5px", backgroundColor: "darkgreen"}} style={{ fontSize: '20px' }}>+</Button>
        <Button variant='contained' onClick={() => {setScore(score - 100)}} sx={{width: "50%", ml: "5px", backgroundColor: "darkred"}} style={{ fontSize: '20px' }}>-</Button>
      </Box>
      </>
    );
  };

export default UserCard