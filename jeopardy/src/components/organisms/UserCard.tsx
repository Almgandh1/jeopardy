import React from 'react'
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

type UserCardProps = {
  title: string;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>
}


const UserCard = ({ title, score, setScore }: UserCardProps) => {
  const cardStyle = {
    width: '400px', // Adjust the width as desired
    padding: '20px',
    display: 'flex',
    flexDirection: 'column' as 'column', // Explicitly set the type
    alignItems: 'center',
  };

  const paperStyle={
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center vertically
    padding: '20px',

  }

  const titleStyle = {
    fontSize: '1.5rem', // You can adjust the font size here
    marginBottom: '10px',
  };

  const scoreStyle = {
    fontSize: '1.5rem', // Match the font size with the title
  };

  const buttonsContainerStyle = {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
  };

  return (
    <div style={cardStyle}>
      <Paper elevation={2} style={paperStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <div style={buttonsContainerStyle}>
          <Button variant="outlined" onClick={() => setScore(score + 200)}>
            +
          </Button>
          <Button variant="outlined" onClick={() => setScore(score - 200)}>
            -
          </Button>
        </div>
        <p style={scoreStyle}>Score: {score}</p>
      </Paper>
    </div>
  );
};

export default UserCard