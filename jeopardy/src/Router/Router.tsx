import { Route, Routes } from "react-router-dom";
import PageOne from "../components/pages/PageOne";
import PageTwo from "../components/pages/PageTwo";
import FinalScores from "../components/pages/FinalScores";
import { useState } from "react";

const Router = () => {
  const [tashiScore, setTashiScore] = useState(0)
  const [timosScore, setTimosScore] = useState(0)
  const [cyrillScore, setCyrillScore] = useState(0)
  const [ronScore, setRonScore] = useState(0)
  const [nevioScore, setNevioScore] = useState(0)
  
  return (
    <Routes>
        <Route path={"/round-one"} element={<PageOne title={"1. Rundi"} cyrillScore={cyrillScore} setCyrillScore={setCyrillScore} tashiScore={tashiScore} setTashiScore={setTashiScore} 
        timosScore={timosScore} setTimosScore={setTimosScore} ronScore={ronScore} setRonScore={setRonScore} nevioScore={nevioScore} setNevioScore={setNevioScore} />}/>
        <Route path={"/round-two"} element={<PageTwo title={"2.d Rundi"} cyrillScore={cyrillScore} setCyrillScore={setCyrillScore} tashiScore={tashiScore} setTashiScore={setTashiScore} 
        timosScore={timosScore} setTimosScore={setTimosScore} ronScore={ronScore} setRonScore={setRonScore} nevioScore={nevioScore} setNevioScore={setNevioScore} />}/>
        <Route path={"/scores"} element={<FinalScores cyrillScore={cyrillScore} tashiScore={tashiScore} timosScore={timosScore} ronScore={ronScore} nevioScore={nevioScore}/>}/>
    </Routes>
  )
}

export default Router