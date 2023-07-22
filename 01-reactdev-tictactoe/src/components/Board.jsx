import { Square } from "./Square";
import PropTypes from 'prop-types';
import { calculateWinner } from "../helpers";

export const Board = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (calculateWinner(squares)) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const createBoard = () => {
    const boardSquares =[];
    for (let i = 0; i < squares.length; i++) {
      if (i % 3 === 0 ) {
        boardSquares.push(<div className="board-row"></div>);
      }
      boardSquares.push(<Square value={squares[i]} onSquareClick={() => handleClick(i)} />);
    }
    return boardSquares;
  }

  return (
    <>
      <div className="status">{status}</div>
      {createBoard()}
    </>
  )
}

Board.propTypes ={
  xIsNext: PropTypes.bool,
  squares: PropTypes.array,
  onPlay: PropTypes.func
}

// return (
//   <>
//     <div className="status">{status}</div>
//     <div className="board-row">
//       <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//       <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//       <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//     </div>
//     <div className="board-row">
//       <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//       <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//       <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//     </div>
//     <div className="board-row">
//       <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//       <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//       <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//     </div>
//   </>
// );
