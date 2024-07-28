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
            maxWidth: "1500px",
            height: "100%",
            maxHeight: "800px"
          },
        },
      }}>
        <DialogContent sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <Typography variant='h3' sx={{justifyItems: "center", alignSelf: "center"}}>{question}</Typography>
          {image && <img src={require("../data/images" + image)} alt='banana' style={{marginTop: "20px", width: "1000px", height:"700px", objectFit: "contain", flex: 1, alignSelf: "center"}}></img>}
          {audio && <audio controls style={{marginTop: "20px", alignSelf: "center"}}><source src={require("../data/audio" + audio)} type="audio/mpeg"></source></audio>}
        </DialogContent>
    </Dialog>
  )
}

export default QuestionDialog