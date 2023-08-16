import { Box, Card, Grid } from '@mui/material'
import MainCard from "../organisms/MainCard"
import React from 'react'
import UserCard from '../organisms/UserCard'

const MainPage = () => {
  return (
      <Box>
        <MainCard />
          <Box style={{ display: 'flex', flexDirection: 'row' }}>
              
            <UserCard title="John Doe" score={100} />
            <UserCard title="Dohn Joe" score={100} />
            <UserCard title="Jllaosdjdfj" score={100} />
          </Box>

      </Box>
  )
}

export default MainPage