import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";

//component
import HomePage from "./components/HomePage";
import GamePlay from "./components/GamePlay";
import Game2Player from "./components/Game2Player";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/play-computer" element={<GamePlay />}></Route>
          <Route path="/play" element={<Game2Player />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
