import { Dialog, DialogContent, Typography } from '@mui/material'
import React from 'react'

type QuestionDialogProps = {
    open: boolean;
    handleClose: Function;
    question: string;
    image?: any;
    audio?: any;
}

const QuestionDialog = ({handleClose, open, question, image, audio} : QuestionDialogProps) => {

  return (
    <Dialog onClose={() => {handleClose();}} open={open}
    sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "2000px",
            height: "100%",
            maxHeight: "1000px"
          },
        },
      }}>
        <DialogContent sx={{display: "flex", flexDirection: "column"}}>
            <Typography variant='h3'>{question}</Typography>
        {image && <img src={require("../data/images" + image)} alt='banana' style={{marginTop: "20px", maxWidth: "1000px", maxHeight:"750px", objectFit: "contain"}}></img>}
        {audio && <audio controls style={{marginTop: "20px"}}><source src={require("../data/audio" + audio)} type="audio/mpeg"></source></audio>}
        </DialogContent>
    </Dialog>
  )
}

export default QuestionDialog