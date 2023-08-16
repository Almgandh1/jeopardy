import { Box, Card, Grid } from '@mui/material'
import MainCard from "../organisms/MainCard"
import React from 'react'
import UserCard from '../organisms/UserCard'

const MainPage = () => {
  return (
      <Box>
        <MainCard />
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginRight: '10px' }}>
            <UserCard title="John Doe" score={100} />
          </div>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <UserCard title="Dohn Joe" score={100} />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <UserCard title="Jllaosdjdfj" score={100} />
          </div>
        </Box>

      </Box>
  )
}

export default MainPage