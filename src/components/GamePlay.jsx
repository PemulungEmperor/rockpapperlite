import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import Title from "./Title";

const GamePlay = () => {
  const navigate = useNavigate();
  const choices = ["rock", "paper", "scissors"];
  const [P1Score, setP1Score] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(1);
  const [result, setResult] = useState("");
  const [winner, setWinner] = useState("");

  const computerPlay = () => {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  };

  const playGame = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
      setResult("It's Draw");
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
      setP1Score((P1Score) => P1Score + 1);
      setResult("Player 1 Got Point!");
    } else {
      setComputerScore((computerScore) => computerScore + 1);
      setResult("Computer Got Point!");
    }
    setRound((round) => round + 1);

    if (P1Score === 3) {
      setWinner("Player 1");
    } else {
      setWinner("Computer");
    }
  };

  const gameCalculation = (e) => {
    const playerSelection = e.currentTarget.value;
    const computerSelection = computerPlay();

    playGame(playerSelection, computerSelection);
  };

  const restartAll = () => {
    setP1Score(0);
    setComputerScore(0);
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

  if (P1Score === 3 || computerScore === 3) {
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
          }, 1000);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      });
  }

  return (
    <div>
      <Title></Title>
      <div className="container mt-5 w-50" style={{ border: "2px solid #5B9A8B" }}>
        <div className="row my-3">
          <h5 className="text-center text-black fw-bold"> Round {round}</h5>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="col-md-6 text-center">
              <p className="text-center text-primary fw-bold">Player 1</p>
              <p className="text-center text-success fw-bold">{P1Score}</p>
              <button className="btn" id="rock" value="rock" onClick={gameCalculation} style={{ border: "none" }}>
                <img className="img-fluid" src={rock} style={{ maxWidth: "75px" }} />
              </button>
              <button className="btn" id="paper" value="paper" onClick={gameCalculation} style={{ border: "none" }}>
                <img className="img-fluid" src={paper} style={{ maxWidth: "75px" }} />
              </button>
              <button className="btn" id="scissors" value="scissors" onClick={gameCalculation} style={{ border: "none" }}>
                <img className="img-fluid" src={scissors} style={{ maxWidth: "75px" }} />
              </button>
            </div>
          </div>
          <div className="col-md-4 result text-center my-2" id="results">
            <h4 className="mt-4 ">{result}</h4>
          </div>
          <div className="col-md-4  d-flex justify-content-center">
            <div className="col-md-6 text-center">
              <p className="text-center text-danger fw-bold">Computer</p>
              <p className="text-center text-success fw-bold">{computerScore}</p>
              <button className="btn" id="rock" value="rock" disabled style={{ border: 0 }}>
                <img className="img-fluid" src={rock} style={{ maxWidth: "75px" }} />
              </button>
              <button className="btn" id="paper" value="paper" disabled style={{ border: 0 }}>
                <img className="img-fluid" src={paper} style={{ maxWidth: "75px" }} />
              </button>
              <button className="btn" id="scissors" value="scissors" disabled style={{ border: 0 }}>
                <img className="img-fluid" src={scissors} style={{ maxWidth: "75px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
