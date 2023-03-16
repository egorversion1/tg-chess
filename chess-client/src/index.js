import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import BoardRow from './components/board-row';
import './index.css';
import Sketch from './sketch.js';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    
    return (
      <div>
        <BoardRow />
        <BoardRow />
        <BoardRow />
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);

