import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import UserCard from './UserCard'

const UserScores = () => {

  
    const [kunfiScore, setKunfiScore] = useState(0)
    const [timosScore, setTimosScore] = useState(0)
    const [alecScore, setAlecScore] = useState(0)
    const [ronScore, setRonScore] = useState(0)
    const [nevioScore, setNevioScore] = useState(0)


  return (
    <Box style={{ display: 'flex', flexDirection: 'row' }} sx={{width: "100%"}}>
          <div style={{ marginRight: '10px' }}>
            <UserCard title="Alec" score={alecScore} setScore={setAlecScore}/>
          </div>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <UserCard title="Kunfi" score={kunfiScore} setScore={setKunfiScore}/>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <UserCard title="Timos" score={timosScore} setScore={setTimosScore}/>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <UserCard title="Ron" score={ronScore} setScore={setRonScore}/>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <UserCard title="Nevio" score={nevioScore} setScore={setNevioScore}/>
          </div>
    </Box>
  )
}

export default UserScores