/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Square from "../Square/Square";
import styles from "./Board.module.css";

type params = {
  startWithX: boolean;
  onXWin: () => void;
  onOWin: () => void;
  onXTurn: () => void;
  onOTurn: () => void;
  onDraw: () => void;
  onGameOver: () => void;
};

function Board({
  startWithX,
  onXWin,
  onOWin,
  onDraw,
  onXTurn,
  onOTurn,
  onGameOver,
}: params) {
  const [isGameOver, setGameOver] = useState<boolean>(false);
  const [xRole, setXRole] = useState<boolean>(startWithX);
  const [board, setBoard] = useState<string[] | null[]>(
    new Array(9).fill(undefined)
  );

  function handleClick(index: number, xRole: boolean) {
    if (board[index]) {
      return;
    }
    if (!isGameOver) {
      const nextBoard: string[] | null[] = board.slice();
      xRole ? onXTurn() : onOTurn();
      setXRole(!xRole);
      nextBoard[index] = xRole ? "X" : "O";
      setBoard(nextBoard);

      if (nextBoard.indexOf(null) === -1) {
        onDraw();
        onGameOver();
      }
    } else {
      !xRole ? onXWin() : onOWin();
      onGameOver();
    }
  }

  // Check if a player wins
  useEffect(() => {
    setGameOver(checkWinner(board));
  }, [board]);

  function checkWinner(board: string[] | null[]) {
    if (
      board[0] === board[1] &&
      board[0] &&
      board[1] &&
      board[0] === board[2] &&
      board[0] &&
      board[2]
    ) {
      return true;
    }
    if (
      board[3] === board[4] &&
      board[3] &&
      board[4] &&
      board[3] === board[5] &&
      board[3] &&
      board[5]
    ) {
      return true;
    }
    if (
      board[6] === board[7] &&
      board[6] &&
      board[7] &&
      board[6] === board[8] &&
      board[6] &&
      board[8]
    ) {
      return true;
    }
    if (
      board[0] === board[3] &&
      board[0] &&
      board[3] &&
      board[0] === board[6] &&
      board[0] &&
      board[6]
    ) {
      return true;
    }
    if (
      board[1] === board[4] &&
      board[1] &&
      board[4] &&
      board[1] === board[7] &&
      board[1] &&
      board[7]
    ) {
      return true;
    }
    if (
      board[2] === board[5] &&
      board[2] &&
      board[5] &&
      board[2] === board[8] &&
      board[2] &&
      board[8]
    ) {
      return true;
    }
    if (
      board[0] === board[4] &&
      board[0] &&
      board[4] &&
      board[0] === board[8] &&
      board[0] &&
      board[8]
    ) {
      return true;
    }
    if (
      board[2] === board[4] &&
      board[2] &&
      board[4] &&
      board[2] === board[6] &&
      board[2] &&
      board[6]
    ) {
      return true;
    }
    return false;
  }

  return (
    <>
      <div className={styles.board}>
        {board.map((square, index) => (
          <Square
            key={index}
            value={square}
            onClick={() => handleClick(index, xRole)}
          />
        ))}
      </div>
    </>
  );
}

export default Board;
