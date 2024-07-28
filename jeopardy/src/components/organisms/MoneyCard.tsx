import { Card, CardActionArea, Typography } from '@mui/material';
import React, { useState } from 'react'
import MainCardStyle from './MainCardStyle';
import QuestionDialog from './QuestionDialog';

type MoneyCardProps = {
    amount: number;
    question: string;
    answer: string;
    answerImage: any;
    image: any;
    audio: any;
}

const MoneyCard = ({ amount, question, answer, image, answerImage, audio}: MoneyCardProps) => {
    const [openQuestionDialog, setOpenQuestionDialog] = useState<boolean>(false);
    const [status, setStatus] = useState<Boolean>(true);

    const handleQuestionClose = () => {
        setOpenQuestionDialog(false);
    };

    return (
        <>
            <Card>
                <CardActionArea onClick={() => {setOpenQuestionDialog(true)}}>
                    <Typography sx={{...MainCardStyle.Card, ...(!status ? {backgroundColor: 'red'} : {backgroundColor: 'green'}),}}>{ amount }</Typography>
                </CardActionArea>
            </Card>
            <QuestionDialog handleClose={handleQuestionClose} open={openQuestionDialog} question={question} image={image} audio={audio} setStatus={setStatus} answer={answer} answerImage={answerImage}/>
        </>
    );
  };

export default MoneyCard