import React from 'react'
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

type UserCardProps = {
  title: string;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>
}


const UserCard = ({ title, score, setScore }: UserCardProps) => {
    return (
      <>
      <Paper>
        <h1>{title}</h1>
        <p>Score: {score}</p>
      </Paper>
      <Button variant='contained' onClick={() => {setScore(score + 200)}}>Add Points</Button>
      <Button variant='contained' onClick={() => {setScore(score - 200)}}>Remove Points</Button>
      </>
    );
  };

export default UserCard