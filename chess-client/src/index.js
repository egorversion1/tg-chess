import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Board2 from './components/board-row';
import './index.css';
import Sketch from './sketch.js';


class Board extends React.Component {


  render() {
    
    return (
      <div>
        <Board2 />
        <Board2 />
        <Board2 />
        <Board2 />
        <Board2 />
        <Board2 />
        <Board2 />
        <Board2 />

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

