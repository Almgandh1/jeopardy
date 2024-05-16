import { Box, Typography,} from '@mui/material'
import MainCard from "../organisms/Board"
import React from 'react'
import Footer from '../organisms/UserScores'

type MainPageProps = {
  title: string;
}

const MainPage = ({ title }: MainPageProps) => {

  return (
      <Box sx={{margin: "20px"}}>
        <Typography variant='h1' sx={{textAlign: "center", marginBottom:"20px"}}>{title}</Typography>
        <MainCard />
        <Footer />
      </Box>
  )
}

export default MainPage