import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);

  const enabledStart = (e) => {
    const selectedMode = e.target.value;
    if (selectedMode === "computer") {
      setIsEnabled(false);
      setMode(selectedMode);
    } else if (selectedMode === "player") {
      setIsEnabled(false);
      setMode(selectedMode);
    } else {
      setIsEnabled(true);
    }
  };

  const playTheGame = () => {
    if (mode === "player") {
      navigate("/play");
    } else {
      navigate("/play-computer");
    }
  };

  return (
    <div>
      <div className="container w-75 mt-5" style={{ border: "3px solid #5B9A8B" }}>
        <div className="row">
          <h3 className="text-center my-5">Welcome!</h3>
        </div>
        <div className="row">
          <div className="selectMode mb-4">
            <h5 className="text-center">Select Mode :</h5>
            <div className="d-flex justify-content-center">
              <select className="form-select form-select-md w-50" value={mode} onChange={(e) => enabledStart(e)}>
                <option value=""></option>
                <option value="player">2 Player</option>
                <option value="computer">Versus Computer</option>
              </select>
            </div>
          </div>
          <div className="text-center my-4">
            <h6 className="my-3 text-success fw-bold">Get 3 Point to win!</h6>
            <button className="btn btn-success text-black w-25 mt-1" disabled={isEnabled} onClick={playTheGame}>
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
