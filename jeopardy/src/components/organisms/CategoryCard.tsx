import { Typography } from '@mui/material';
import React from 'react'
import MainCardStyle from './MainCardStyle';

type CategoryCardProps = {
  categoryName: string;
}


const CategoryCard = ({ categoryName }: CategoryCardProps) => {
    return (
      <Typography sx={MainCardStyle.Title}>{ categoryName }</Typography>
    );
  };

export default CategoryCard