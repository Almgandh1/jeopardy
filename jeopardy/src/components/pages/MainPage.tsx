import { Box,} from '@mui/material'
import MainCard from "../organisms/MainCard"
import React, { useState } from 'react'
import UserCard from '../organisms/UserCard'

const MainPage = () => {
  const [kunfiScore, setKunfiScore] = useState(0)
  const [mircoScore, setMircoScore] = useState(0)
  const [alecScore, setAlecScore] = useState(0)

  return (
      <Box>
        <MainCard />
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginRight: '10px' }}>
            <UserCard title="Alec" score={alecScore} setScore={setAlecScore}/>
          </div>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <UserCard title="Kunfi" score={kunfiScore} setScore={setKunfiScore}/>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <UserCard title="Mirco" score={mircoScore} setScore={setMircoScore}/>
          </div>
        </Box>

      </Box>
  )
}

export default MainPage