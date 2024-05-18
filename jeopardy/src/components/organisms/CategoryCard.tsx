import { Card, Typography } from '@mui/material';
import React from 'react'
import MainCardStyle from './MainCardStyle';

type CategoryCardProps = {
  categoryName: string;
}


const CategoryCard = ({ categoryName }: CategoryCardProps) => {
    return (
      <Card>
        <Typography sx={MainCardStyle.Title}>{ categoryName }</Typography>
      </Card>
    );
  };

export default CategoryCard