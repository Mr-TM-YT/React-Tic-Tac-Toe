import { useState } from "react";
import Board from "./Components/Board/Board";
import reactSVG from "./assets/react.svg";

function App() {
  const startWithX = true;
  const [message, setMessage] = useState(startWithX ? "X's turn" : "O's turn");
  return (
    <>
      <main>
        <h1>
          Tic Tac Toe with React.js! <img src={reactSVG} />
        </h1>
        <h1>{message}</h1>
        <Board
          startWithX={startWithX}
          onDraw={() => setMessage("It's a draw")}
          onXWin={() => setMessage("X Won")}
          onOWin={() => setMessage("O Won")}
          onOTurn={() => setMessage("X's turn")}
          onXTurn={() => setMessage("O's turn")}
          onGameOver={() => setTimeout(() => location.reload(), 2000)}
        />
      </main>
    </>
  );
}

export default App;
