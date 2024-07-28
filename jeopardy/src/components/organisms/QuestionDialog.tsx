import { Button, Dialog, DialogContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import QuestionAnswer from './QuestionAnswer';

type QuestionDialogProps = {
    open: boolean;
    handleClose: Function;
    question: string;
    image?: any;
    audio?: any;
    answer: string;
    answerImage?: any;
    setStatus: React.Dispatch<React.SetStateAction<Boolean>>;
}

const QuestionDialog = ({handleClose, open, question, image, audio, answer, answerImage, setStatus} : QuestionDialogProps) => {
  const [openAnswerDialog, setOpenAnswerDialog] = useState<boolean>(false);

  const handleAnswerClose = () => {
    setOpenAnswerDialog(false);
};

  return (
    <>
      <QuestionAnswer handleClose={handleAnswerClose} open={openAnswerDialog} answer={answer} answerImage={answerImage} />
      <Dialog onClose={() => {handleClose();}} open={open}
      sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "1500px",
              height: "100%",
              maxHeight: "850px"
            },
          },
        }}>
          <DialogContent sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <Typography variant='h3' sx={{justifyItems: "center", alignSelf: "center"}}>{question}</Typography>
            {image && <img src={require("../data/images" + image)} alt='banana' style={{marginTop: "20px", width: "1000px", height:"600px", objectFit: "contain", flex: 1, alignSelf: "center"}}></img>}
            {audio && <audio controls style={{marginTop: "50px", marginBottom: "50px", alignSelf: "center"}}><source src={require("../data/audio" + audio)} type="audio/mpeg"></source></audio>}
            <Button variant='contained' onClick={() => {setOpenAnswerDialog(true)}} sx={{width: "800px", alignSelf: "center"}}>Lösung</Button>
          </DialogContent>
      </Dialog>
    </>
  )
}

export default QuestionDialog