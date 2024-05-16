import { Card, CardActionArea, Typography } from '@mui/material';
import React, { useState } from 'react'
import MainCardStyle from './MainCardStyle';
import QuestionDialog from './QuestionDialog';


type MoneyCardProps = {
    amount: number;
    question: string;
}

const MoneyCard = ({ amount, question }: MoneyCardProps) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const handleClose = () => {
        setOpenDialog(false);
      };

    return (
        <>
            <Card>
                <CardActionArea onClick={() => {setOpenDialog(true)}}>
                    <Typography sx={MainCardStyle.Card}>{ amount }</Typography>
                </CardActionArea>
            </Card>
            <QuestionDialog handleClose={handleClose} open={openDialog} question={question}/>
        </>
    );
  };

export default MoneyCard