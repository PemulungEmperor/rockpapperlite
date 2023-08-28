import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import Title from "./Title";

const Game2Player = () => {
  const navigate = useNavigate();
  const [P1choice, setP1Choice] = useState("");
  const [P1Score, setP1Score] = useState(0);
  const [P2Score, setP2Score] = useState(0);
  const [disabledBtn1, setDisabledBtn1] = useState(false);
  const [disabledBtn2, setDisabledBtn2] = useState(true);
  const [round, setRound] = useState(1);
  const [result, setResult] = useState("");
  const [winner, setWinner] = useState("");

  const playGame = (playerSelection, player2Selection) => {
    if (playerSelection === player2Selection) {
      setResult("It's Draw");
    } else if ((playerSelection === "rock" && player2Selection === "scissors") || (playerSelection === "paper" && player2Selection === "rock") || (playerSelection === "scissors" && player2Selection === "paper")) {
      setP1Score((P1Score) => P1Score + 1);
      setResult("Player 1 Got Point!");
    } else {
      setP2Score((P2Score) => P2Score + 1);
      setResult("Player 2 Got Point!");
    }
    setRound((round) => round + 1);
  };

  const player1Turn = (e) => {
    setP1Choice(e.currentTarget.value);
    setDisabledBtn1(true);
    setDisabledBtn2(false);
  };

  const player2Turn = (e) => {
    playGame(P1choice, e.currentTarget.value);
    setDisabledBtn2(true);
    setDisabledBtn1(false);
  };

  const restartAll = () => {
    setP1Score(0);
    setP2Score(0);
    setRound(1);
    setResult("");
    setWinner("");
  };

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success ms-2",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  if (P1Score === 3 || P2Score === 3) {
    swalWithBootstrapButtons
      .fire({
        title: `${winner} Wins!`,
        iconHtml: '<img src="https://cdn-icons-png.flaticon.com/512/742/742751.png" style="max-width:100px;">',
        showCancelButton: true,
        confirmButtonText: "Play Again",
        cancelButtonText: "Back to Home",
        reverseButtons: true,
        allowOutsideClick: false,
      })

      .then((result) => {
        if (result.isConfirmed) {
          setTimeout(() => {
            restartAll();
          }, 300);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      });
  }

  useEffect(() => {
    if (P1Score === 3) {
      setWinner("Player 1");
    } else if (P2Score === 3) {
      setWinner("Player 2");
    }
  }, [P1Score, P2Score]);

  return (
    <div>
      <Title></Title>
      <div className="container mt-5 mb-5 w-75" style={{ border: "2px solid #5B9A8B" }}>
        <div className="row my-3">
          <h5 className="text-center text-black fw-bold"> Round {round}</h5>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="col-md-6 text-center">
              <p className="text-center text-primary fw-bold">Player 1</p>
              <p className="text-center text-success fw-bold">{P1Score}</p>
              <button className="btn" id="rock" value="rock" style={{ border: "none" }} disabled={disabledBtn1} onClick={player1Turn}>
                <img className="img-fluid" src={rock} style={{ maxWidth: "75px" }} />
              </button>
              <button className="btn" id="paper" value="paper" style={{ border: "none" }} disabled={disabledBtn1} onClick={player1Turn}>
                <img className="img-fluid" src={paper} style={{ maxWidth: "75px" }} />
              </button>
              <button className="btn" id="scissors" value="scissors" style={{ border: "none" }} disabled={disabledBtn1} onClick={player1Turn}>
                <img className="img-fluid" src={scissors} style={{ maxWidth: "75px" }} />
              </button>
            </div>
          </div>
          <div className="col-md-4 result text-center my-2" id="results">
            <h4 className="mt-4 ">{result}</h4>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="col-md-6 text-center">
              <p className="text-center text-danger fw-bold">Player 2</p>
              <p className="text-center text-success fw-bold">{P2Score}</p>
              <button className="btn" id="rock" value="rock" style={{ border: "none" }} disabled={disabledBtn2} onClick={player2Turn}>
                <img className="img-fluid" src={rock} style={{ maxWidth: "75px" }} />
              </button>
              <button className="btn" id="paper" value="paper" style={{ border: "none" }} disabled={disabledBtn2} onClick={player2Turn}>
                <img className="img-fluid" src={paper} style={{ maxWidth: "75px" }} />
              </button>
              <button className="btn" id="scissors" value="scissors" style={{ border: "none" }} disabled={disabledBtn2} onClick={player2Turn}>
                <img className="img-fluid" src={scissors} style={{ maxWidth: "75px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game2Player;
