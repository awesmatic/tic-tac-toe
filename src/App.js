import "./App.css";
import Square from "./Square";
import { useEffect, useState } from "react";
import { patterns } from "./Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  useEffect(() => {
    checkWin();
    checkDraw();
    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);
  useEffect(() => {
    if (result.state != "none") {
      alert("game finished winning player:" + result.winner);
      restart();
    }
  }, [result]);
  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx == square && val == "") {
          return player;
        }
        return val;
      })
    );
  };
  const checkWin = () => {
    patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" });
      }
    });
  };
  const restart = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };
  const checkDraw = () => {
    let tie = true;
    board.forEach((square) => {
      if (square == "") {
        tie = false;
      }
    });
    if (tie) {
      setResult({ winner: "No One", state: "Draw" });
    }
  };
  return (
    <div>
      <h1 className="header">Tic Tac Toe</h1>
      <div className="App">
        <div className="container">
          <div className="row">
            <Square
              value={board[0]}
              chooseSquare={() => {
                chooseSquare(0);
              }}
            />
            <Square
              value={board[1]}
              chooseSquare={() => {
                chooseSquare(1);
              }}
            />
            <Square
              value={board[2]}
              chooseSquare={() => {
                chooseSquare(2);
              }}
            />
          </div>
          <div className="row">
            <Square
              value={board[3]}
              chooseSquare={() => {
                chooseSquare(3);
              }}
            />
            <Square
              value={board[4]}
              chooseSquare={() => {
                chooseSquare(4);
              }}
            />
            <Square
              value={board[5]}
              chooseSquare={() => {
                chooseSquare(5);
              }}
            />
          </div>
          <div className="row">
            <Square
              value={board[6]}
              chooseSquare={() => {
                chooseSquare(6);
              }}
            />
            <Square
              value={board[7]}
              chooseSquare={() => {
                chooseSquare(7);
              }}
            />
            <Square
              value={board[8]}
              chooseSquare={() => {
                chooseSquare(8);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
