import React from "react";
import newLogo from "../assets/newLogo.png";

const Title = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center ">
        <div className="col-md-8 text-center">
          <div className="row">
            <div className="col-md-2">
              <img className="img-fluid" src={newLogo} style={{ maxWidth: "100px" }} />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <h1 style={{ color: "#252B48" }}>Rock Papper Scissors --- Luck Clashes</h1>
            </div>
            <div className="col-md-2">
              <img className="img-fluid" src={newLogo} style={{ maxWidth: "100px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
