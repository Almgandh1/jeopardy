import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from 'react'
import { Card } from '@mui/material';



const UserCard = ({ title, score }: { title: string; score: number }) => {
    return (
      <Paper>
        <h1>{title}</h1>
        <p>Score: {score}</p>
      </Paper>
    );
  };

export default UserCard