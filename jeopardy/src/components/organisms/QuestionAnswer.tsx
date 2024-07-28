import { Button, Dialog, DialogContent, Typography } from '@mui/material'
import React from 'react'

type QuestionAnswerProps = {
    open: boolean;
    handleClose: Function;
    answer: string;
    answerImage?: any;
}

const QuestionAnswer = ({handleClose, open, answer, answerImage} : QuestionAnswerProps) => {

  return (
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
          <Typography variant='h3' sx={{justifyItems: "center", alignSelf: "center"}}>{answer}</Typography>
          {answerImage && <img src={require("../data/images" + answerImage)} alt='banana' style={{marginTop: "20px", width: "1000px", height:"600px", objectFit: "contain", flex: 1, alignSelf: "center"}}></img>}
          <Button variant='contained' sx={{width: "800px", alignSelf: "center"}} onClick={handleClose()}>Schliessen</Button>
        </DialogContent>
    </Dialog>
  )
}

export default QuestionAnswer