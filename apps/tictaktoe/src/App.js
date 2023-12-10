import { useState } from "react"

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i) {
    console.log(...args)
    const nextSquare = squares.slice(); // copy squares to a new array nextSquare

    nextSquare[0] = "X"
    console.log(nextSquare)
    setSquares(nextSquare)
  }

  return (
    <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={handleClick}/>
      <Square value={squares[1]} />
      <Square value={squares[2]} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} />
      <Square value={squares[4]} />
      <Square value={squares[5]} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} />
      <Square value={squares[7]} />
      <Square value={squares[8]} />
    </div>
  </>
  );
}

function Square({value, onSquareClick}) {

  return <button className="square" onClick={() => onSquareClick(1,2)}>{value}</button>;
}