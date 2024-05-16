import { Route, Routes } from "react-router-dom";
import MainPage from "../components/pages/MainPage";

const Router = () => {
  return (
    <Routes>
        <Route path={"/round-one"} element={<MainPage title={"Round One"} />}/>
        <Route path={"/round-two"} element={<MainPage title={"Round Two"} />}/>
    </Routes>
  )
}

export default Router