import React from 'react'
import Grid from '@mui/material/Grid'
import CategoryCard from './CategoryCard';
import { useLocation } from 'react-router-dom';
import MoneyCard from './MoneyCard';
import { dialogContent } from '../data/DialogContent';
import { categories } from '../data/categories';

const Board = () => {

  let location = useLocation();
  let currentCategories = location.pathname === "/round-one" ? categories.firstCategories : categories.secondCategories;
  let currentDialogContent = location.pathname === "/round-one" ? dialogContent.firstRoundContent : dialogContent.secondRoundContent;


  return (
    <>
    <Grid container spacing={4}>
      {
        currentCategories.map(category => (
          <Grid item xs={2}>
            <CategoryCard categoryName={category} />
          </Grid>  
        ))
      }
      {
        currentDialogContent.map(content => (
          <Grid item xs={2}>
            <MoneyCard amount={content.points} question={content.question}/>
          </Grid>  
        ))
      }  
    </Grid>
  </>
)
}

export default Board