import { useState } from 'react';
import { Board } from './components/Board';
import './Game.css';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [sortOrder, setSortOrder] = useState('ascending');

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    const adjustedMove = sortOrder === 'descending' ? history.length - move - 1 : move;
    if (adjustedMove === currentMove) {
      return (
        <li key={adjustedMove}>
          <div>You are at move #{adjustedMove}</div>
        </li>
      );
    }
    let description;
    if (adjustedMove > 0) {
      description = "Go to move #" + adjustedMove;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={adjustedMove}>
        <button onClick={() => jumpTo(adjustedMove)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={() => {setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending')}}>Toggle moves order</button>
        <ul>{moves}</ul>
      </div>
    </div>
  );
}
