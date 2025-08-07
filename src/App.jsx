import { useState } from "react";
import rocklogo from "/img/rock.png";
import paperlogo from "/img/paper.png";
import scissorlogo from "/img/scissor.png";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Choose your move!");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setcomputerScore] = useState(0);


  const handleRockClick = () => {
    const moves = ["rock", "paper", "scissors"];
    const computerMove = moves[Math.floor(Math.random() * 3)];

    if (computerMove === "rock") {
      setMessage(`tie! you both pick ${computerMove}`);
    } else if (computerMove === "paper") {
      setMessage(`you lose!, computer picks ${computerMove}`);
      setcomputerScore(computerScore + 1);
    } else if (computerMove === "scissors") {
      setMessage(`you win!, computer picks ${computerMove}`);
      setPlayerScore(playerScore + 1);
    }
  };
  const handlePaperClick = () => {
    const moves = ["rock", "paper", "scissors"];
    const computerMove = moves[Math.floor(Math.random() * 3)];

    if (computerMove === "paper") {
      setMessage(`tie! you both  pick ${computerMove}`);
    } else if (computerMove === "scissors") {
      setMessage(`you lose!, computer picks ${computerMove}`);
      setcomputerScore(computerScore + 1);
    } else if (computerMove === "rock") {
      setMessage(`you win!, computer picks ${computerMove}`);
      setPlayerScore(playerScore + 1);
    }
  };
  const handleScissorsClick = () => {
    const moves = ["rock", "paper", "scissors"];
    const computerMove = moves[Math.floor(Math.random() * 3)];

    if (computerMove === "scissors") {
      setMessage(`tie! you both pick ${computerMove}`);
    } else if (computerMove === "rock") {
      setMessage(`you lose!, computer picks ${computerMove}`);
      setcomputerScore(computerScore + 1);
    } else if (computerMove === "paper") {
      setMessage(`you win!, computer picks ${computerMove}`);
      setPlayerScore(playerScore + 1);
    }
  };
  const handleresetClick = () => {
    setPlayerScore(0);
    setcomputerScore(0);
    setMessage('Choose your move');
  };
  return (
    <>
      <h1>Rock Paper Scissor</h1>
      <div className="score">
        <h3>player: {playerScore}</h3>
        <h3>{computerScore}:Computer</h3>
      </div>
            <h2>{message}</h2>

      <div>
        <img
          src={rocklogo}
          className="logo"
          alt="React logo"
          onClick={handleRockClick}
          style={{ cursor: "pointer" }}
        />
        <img
          src={paperlogo}
          className="logo"
          alt="Vite logo"
          onClick={handlePaperClick}
          style={{ cursor: "pointer" }}
        />
        <img
          src={scissorlogo}
          className="logo"
          alt="Vite logo"
          onClick={handleScissorsClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <button onClick={handleresetClick}>Reset</button>
    </>
  );
}

export default App;
