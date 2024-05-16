import { Dialog, DialogContent, Typography } from '@mui/material'
import React from 'react'

type QuestionDialogProps = {
    open: boolean;
    handleClose: Function;
    question: string;
    image?: string;
    video?: string;
}

const QuestionDialog = ({handleClose, open, question, image, video} : QuestionDialogProps) => {

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
        <DialogContent>
            <Typography variant='h3'>{question}</Typography>
        </DialogContent>
        {image && <img src={image} alt='banana'></img>}
        {video && <video src={video} width="1000" height="750" controls></video>}
    </Dialog>
  )
}

export default QuestionDialog