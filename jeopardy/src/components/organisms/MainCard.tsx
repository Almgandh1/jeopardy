import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import MainCardStyle from './MainCardStyle';
import { Typography } from '@mui/material';

const MainCard = () => {

  const [status1, setStatus1] = useState("normal");
  const [status2, setStatus2] = useState("normal");
  const [status3, setStatus3] = useState("normal");
  const [status4, setStatus4] = useState("normal");
  const [status5, setStatus5] = useState("normal");
  const [status6, setStatus6] = useState("normal");
  const [status7, setStatus7] = useState("normal");
  const [status8, setStatus8] = useState("normal");
  const [status9, setStatus9] = useState("normal");
  const [status10, setStatus10] = useState("normal");
  const [status11, setStatus11] = useState("normal");
  const [status12, setStatus12] = useState("normal");
  const [status13, setStatus13] = useState("normal");
  const [status14, setStatus14] = useState("normal");
  const [status15, setStatus15] = useState("normal");
  const [status16, setStatus16] = useState("normal");
  const [status17, setStatus17] = useState("normal");
  const [status18, setStatus18] = useState("normal");
  const [status19, setStatus19] = useState("normal");
  const [status20, setStatus20] = useState("normal");
  const [status21, setStatus21] = useState("normal");
  const [status22, setStatus22] = useState("normal");
  const [status23, setStatus23] = useState("normal");
  const [status24, setStatus24] = useState("normal");
  const [status25, setStatus25] = useState("normal");
  const [status26, setStatus26] = useState("normal");
  const [status27, setStatus27] = useState("normal");
  const [status28, setStatus28] = useState("normal");
  const [status29, setStatus29] = useState("normal");
  const [status30, setStatus30] = useState("normal");

  const handleClick1 = () => {
    status1 === "normal" ? setStatus1("clicked") : setStatus1("done")
  }

  const handleClick2 = () => {
    status2 === "normal" ? setStatus2("clicked") : setStatus2("done")
  }

  const handleClick3 = () => {
    status3 === "normal" ? setStatus3("clicked") : setStatus3("done")
  }

  const handleClick4 = () => {
    status4 === "normal" ? setStatus4("clicked") : setStatus4("done")
  }

  const handleClick5 = () => {
    status5 === "normal" ? setStatus5("clicked") : setStatus5("done")
  }

  const handleClick6 = () => {
    status6 === "normal" ? setStatus6("clicked") : setStatus6("done")
  }

  const handleClick7 = () => {
    status7 === "normal" ? setStatus7("clicked") : setStatus7("done")
  }

  const handleClick8 = () => {
    status8 === "normal" ? setStatus8("clicked") : setStatus8("done")
  }

  const handleClick9 = () => {
    status9 === "normal" ? setStatus9("clicked") : setStatus9("done")
  }

  const handleClick10 = () => {
    status10 === "normal" ? setStatus10("clicked") : setStatus10("done")
  }

  const handleClick11 = () => {
    status11 === "normal" ? setStatus11("clicked") : setStatus11("done")
  }

  const handleClick12 = () => {
    status12 === "normal" ? setStatus12("clicked") : setStatus12("done")
  }

  const handleClick13 = () => {
    status13 === "normal" ? setStatus13("clicked") : setStatus13("done")
  }

  const handleClick14 = () => {
    status14 === "normal" ? setStatus14("clicked") : setStatus14("done")
  }

  const handleClick15 = () => {
    status15 === "normal" ? setStatus15("clicked") : setStatus15("done")
  }

  const handleClick16 = () => {
    status16 === "normal" ? setStatus16("clicked") : setStatus16("done")
  }

  const handleClick17 = () => {
    status17 === "normal" ? setStatus17("clicked") : setStatus17("done")
  }

  const handleClick18 = () => {
    status18 === "normal" ? setStatus18("clicked") : setStatus18("done")
  }

  const handleClick19 = () => {
    status19 === "normal" ? setStatus19("clicked") : setStatus19("done")
  }

  const handleClick20 = () => {
    status20 === "normal" ? setStatus20("clicked") : setStatus20("done")
  }

  const handleClick21 = () => {
    status21 === "normal" ? setStatus21("clicked") : setStatus21("done")
  }

  const handleClick22 = () => {
    status22 === "normal" ? setStatus22("clicked") : setStatus22("done")
  }

  const handleClick23 = () => {
    status23 === "normal" ? setStatus23("clicked") : setStatus23("done")
  }

  const handleClick24 = () => {
    status24 === "normal" ? setStatus24("clicked") : setStatus24("done")
  }

  const handleClick25 = () => {
    status25 === "normal" ? setStatus25("clicked") : setStatus25("done")
  }

  const handleClick26 = () => {
    status26 === "normal" ? setStatus26("clicked") : setStatus26("done")
  }

  const handleClick27 = () => {
    status27 === "normal" ? setStatus27("clicked") : setStatus27("done")
  }

  const handleClick28 = () => {
    status28 === "normal" ? setStatus28("clicked") : setStatus28("done")
  }

  const handleClick29 = () => {
    status29 === "normal" ? setStatus29("clicked") : setStatus29("done")
  }

  const handleClick30 = () => {
    status30 === "normal" ? setStatus30("clicked") : setStatus30("done")
  }

  return (
    <>
    <Grid container spacing={4}>
    
    {/**
       * Spalten Namen
       */}
    <Grid item xs={2}>
        <Typography sx={MainCardStyle.Title}>Fragen 1</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={MainCardStyle.Title}>Fragen 2</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={MainCardStyle.Title}>Fragen 3</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={MainCardStyle.Title}>Fragen 4</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={MainCardStyle.Title}>Fragen 5</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={MainCardStyle.Title}>Fragen 6</Typography>
      </Grid>

      {/**
       * 200$ Fragen
       */}
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick1} sx={{...MainCardStyle.Card, ...(status1 === "normal" && {backgroundColor: 'green'}), ...(status1 === "clicked" && {backgroundColor: 'yellow'}), ...(status1 === "done" && {backgroundColor: 'red'})
}}>200$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick2} sx={{...MainCardStyle.Card, ...(status2 === "normal" && {backgroundColor: 'green'}), ...(status2 === "clicked" && {backgroundColor: 'yellow'}), ...(status2 === "done" && {backgroundColor: 'red'})
}}>200$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick3} sx={{...MainCardStyle.Card, ...(status3 === "normal" && {backgroundColor: 'green'}), ...(status3 === "clicked" && {backgroundColor: 'yellow'}), ...(status3 === "done" && {backgroundColor: 'red'})
}}>200$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick4} sx={{...MainCardStyle.Card, ...(status4 === "normal" && {backgroundColor: 'green'}), ...(status4 === "clicked" && {backgroundColor: 'yellow'}), ...(status4 === "done" && {backgroundColor: 'red'})
}}>200$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick5} sx={{...MainCardStyle.Card, ...(status5 === "normal" && {backgroundColor: 'green'}), ...(status5 === "clicked" && {backgroundColor: 'yellow'}), ...(status5 === "done" && {backgroundColor: 'red'})
}}>200$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick6} sx={{...MainCardStyle.Card, ...(status6 === "normal" && {backgroundColor: 'green'}), ...(status6 === "clicked" && {backgroundColor: 'yellow'}), ...(status6 === "done" && {backgroundColor: 'red'})
}}>200$</Card>
      </Grid>

      {/**
       * 400$ Fragen
       */}
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick7} sx={{...MainCardStyle.Card, ...(status7 === "normal" && {backgroundColor: 'green'}), ...(status7 === "clicked" && {backgroundColor: 'yellow'}), ...(status7 === "done" && {backgroundColor: 'red'})
}}>400$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick8} sx={{...MainCardStyle.Card, ...(status8 === "normal" && {backgroundColor: 'green'}), ...(status8 === "clicked" && {backgroundColor: 'yellow'}), ...(status8 === "done" && {backgroundColor: 'red'})
}}>400$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick9} sx={{...MainCardStyle.Card, ...(status9 === "normal" && {backgroundColor: 'green'}), ...(status9 === "clicked" && {backgroundColor: 'yellow'}), ...(status9 === "done" && {backgroundColor: 'red'})
}}>400$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick10} sx={{...MainCardStyle.Card, ...(status10 === "normal" && {backgroundColor: 'green'}), ...(status10 === "clicked" && {backgroundColor: 'yellow'}), ...(status10 === "done" && {backgroundColor: 'red'})
}}>400$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick11} sx={{...MainCardStyle.Card, ...(status11 === "normal" && {backgroundColor: 'green'}), ...(status11 === "clicked" && {backgroundColor: 'yellow'}), ...(status11 === "done" && {backgroundColor: 'red'})
}}>400$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick12} sx={{...MainCardStyle.Card, ...(status12 === "normal" && {backgroundColor: 'green'}), ...(status12 === "clicked" && {backgroundColor: 'yellow'}), ...(status12 === "done" && {backgroundColor: 'red'})
}}>400$</Card>
      </Grid>

      {/**
       * 600$ Fragen
       */}
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick13} sx={{...MainCardStyle.Card, ...(status13 === "normal" && {backgroundColor: 'green'}), ...(status13 === "clicked" && {backgroundColor: 'yellow'}), ...(status13 === "done" && {backgroundColor: 'red'})
}}>600$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick14} sx={{...MainCardStyle.Card, ...(status14 === "normal" && {backgroundColor: 'green'}), ...(status14=== "clicked" && {backgroundColor: 'yellow'}), ...(status14 === "done" && {backgroundColor: 'red'})
}}>600$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick15} sx={{...MainCardStyle.Card, ...(status15 === "normal" && {backgroundColor: 'green'}), ...(status15 === "clicked" && {backgroundColor: 'yellow'}), ...(status15 === "done" && {backgroundColor: 'red'})
}}>600$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick16} sx={{...MainCardStyle.Card, ...(status16 === "normal" && {backgroundColor: 'green'}), ...(status16 === "clicked" && {backgroundColor: 'yellow'}), ...(status16 === "done" && {backgroundColor: 'red'})
}}>600$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick17} sx={{...MainCardStyle.Card, ...(status17 === "normal" && {backgroundColor: 'green'}), ...(status17 === "clicked" && {backgroundColor: 'yellow'}), ...(status17 === "done" && {backgroundColor: 'red'})
}}>600$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick18} sx={{...MainCardStyle.Card, ...(status18 === "normal" && {backgroundColor: 'green'}), ...(status18 === "clicked" && {backgroundColor: 'yellow'}), ...(status18 === "done" && {backgroundColor: 'red'})
}}>600$</Card>
      </Grid>

      {/**
       * 800$ Fragen
       */}
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick19} sx={{...MainCardStyle.Card, ...(status19 === "normal" && {backgroundColor: 'green'}), ...(status19 === "clicked" && {backgroundColor: 'yellow'}), ...(status19 === "done" && {backgroundColor: 'red'})
}}>800$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick20} sx={{...MainCardStyle.Card, ...(status20 === "normal" && {backgroundColor: 'green'}), ...(status20 === "clicked" && {backgroundColor: 'yellow'}), ...(status20 === "done" && {backgroundColor: 'red'})
}}>800$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick21} sx={{...MainCardStyle.Card, ...(status21 === "normal" && {backgroundColor: 'green'}), ...(status21 === "clicked" && {backgroundColor: 'yellow'}), ...(status21 === "done" && {backgroundColor: 'red'})
}}>800$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick22} sx={{...MainCardStyle.Card, ...(status22 === "normal" && {backgroundColor: 'green'}), ...(status22 === "clicked" && {backgroundColor: 'yellow'}), ...(status22 === "done" && {backgroundColor: 'red'})
}}>800$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick23} sx={{...MainCardStyle.Card, ...(status23 === "normal" && {backgroundColor: 'green'}), ...(status23 === "clicked" && {backgroundColor: 'yellow'}), ...(status23 === "done" && {backgroundColor: 'red'})
}}>800$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick24} sx={{...MainCardStyle.Card, ...(status24 === "normal" && {backgroundColor: 'green'}), ...(status24 === "clicked" && {backgroundColor: 'yellow'}), ...(status24 === "done" && {backgroundColor: 'red'})
}}>800$</Card>
      </Grid>

      {/**
       * 1000$ Fragen
       */}
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick25} sx={{...MainCardStyle.Card, ...(status25 === "normal" && {backgroundColor: 'green'}), ...(status25 === "clicked" && {backgroundColor: 'yellow'}), ...(status25 === "done" && {backgroundColor: 'red'})
}}>1000$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick26} sx={{...MainCardStyle.Card, ...(status26 === "normal" && {backgroundColor: 'green'}), ...(status26 === "clicked" && {backgroundColor: 'yellow'}), ...(status26 === "done" && {backgroundColor: 'red'})
}}>1000$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick27} sx={{...MainCardStyle.Card, ...(status27 === "normal" && {backgroundColor: 'green'}), ...(status27 === "clicked" && {backgroundColor: 'yellow'}), ...(status27 === "done" && {backgroundColor: 'red'})
}}>1000$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick28} sx={{...MainCardStyle.Card, ...(status28 === "normal" && {backgroundColor: 'green'}), ...(status28 === "clicked" && {backgroundColor: 'yellow'}), ...(status28 === "done" && {backgroundColor: 'red'})
}}>1000$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick29} sx={{...MainCardStyle.Card, ...(status29 === "normal" && {backgroundColor: 'green'}), ...(status29 === "clicked" && {backgroundColor: 'yellow'}), ...(status29 === "done" && {backgroundColor: 'red'})
}}>1000$</Card>
      </Grid>
      <Grid item xs={2}>
        <Card elevation={3} onClick={handleClick30} sx={{...MainCardStyle.Card, ...(status30 === "normal" && {backgroundColor: 'green'}), ...(status30 === "clicked" && {backgroundColor: 'yellow'}), ...(status30 === "done" && {backgroundColor: 'red'})
}}>1000$</Card>
      </Grid>
    </Grid>
  </>
)
}

export default MainCard