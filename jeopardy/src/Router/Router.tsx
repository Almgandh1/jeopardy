import { Route, Routes } from "react-router-dom";
import PageOne from "../components/pages/PageOne";
import PageTwo from "../components/pages/PageTwo";
import FinalScores from "../components/pages/FinalScores";
import { useState } from "react";

const Router = () => {
  const [kunfiScore, setKunfiScore] = useState(0)
  const [timosScore, setTimosScore] = useState(0)
  const [alecScore, setAlecScore] = useState(0)
  const [ronScore, setRonScore] = useState(0)
  const [nevioScore, setNevioScore] = useState(0)
  
  return (
    <Routes>
        <Route path={"/round-one"} element={<PageOne title={"Round One"} alecScore={alecScore} setAlecScore={setAlecScore} kunfiScore={kunfiScore} setKunfiScore={setKunfiScore} 
        timosScore={timosScore} setTimosScore={setTimosScore} ronScore={ronScore} setRonScore={setRonScore} nevioScore={nevioScore} setNevioScore={setNevioScore} />}/>
        <Route path={"/round-two"} element={<PageTwo title={"Round Two"} alecScore={alecScore} setAlecScore={setAlecScore} kunfiScore={kunfiScore} setKunfiScore={setKunfiScore} 
        timosScore={timosScore} setTimosScore={setTimosScore} ronScore={ronScore} setRonScore={setRonScore} nevioScore={nevioScore} setNevioScore={setNevioScore} />}/>
        <Route path={"/scores"} element={<FinalScores alecScore={alecScore} kunfiScore={kunfiScore} timosScore={timosScore} ronScore={ronScore} nevioScore={nevioScore}/>}/>
    </Routes>
  )
}

export default Router