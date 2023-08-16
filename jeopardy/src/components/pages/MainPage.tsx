import { Box, Card } from '@mui/material'
import MainCard from "../organisms/MainCard"
import React from 'react'
import UserCard from '../organisms/UserCard'

const MainPage = () => {
  return (
      <Box>
            <MainCard />
            <UserCard title="John Doe" score={100}/>
            <UserCard title="Yves" score={100}/>
            <UserCard title="Jllaosdjdfj" score={100}/>
      </Box>
  )
}

export default MainPage