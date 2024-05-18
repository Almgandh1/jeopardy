import { Card, CardActionArea, Typography } from '@mui/material';
import React, { useState } from 'react'
import MainCardStyle from './MainCardStyle';
import QuestionDialog from './QuestionDialog';


type MoneyCardProps = {
    amount: number;
    question: string;
    image: any;
    audio: any;
}

const MoneyCard = ({ amount, question, image, audio}: MoneyCardProps) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [status, setStatus] = useState<Boolean>(true);

    const handleClose = () => {
        setStatus(false);
        setOpenDialog(false);
    };

    return (
        <>
            <Card>
                <CardActionArea onClick={() => {setOpenDialog(true)}} disabled={!status}>
                    <Typography sx={{...MainCardStyle.Card, ...(!status ? {backgroundColor: 'red'} : {backgroundColor: 'green'}),}}>{ amount }</Typography>
                </CardActionArea>
            </Card>
            <QuestionDialog handleClose={handleClose} open={openDialog} question={question} image={image} audio={audio}/>
        </>
    );
  };

export default MoneyCard