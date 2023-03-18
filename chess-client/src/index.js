import React from 'react';
import ReactDOM from 'react-dom/client';
import Board2 from './components/board-row';
import './index.css';


class Board extends React.Component {
  render() {
    
    return (
      <div>
        <Board2 obj ={{id: 1, value: 8}}/>
        <Board2 obj ={{id: 2, value: 7}}/>
        <Board2 obj ={{id: 3, value: 6}}/>
        <Board2 obj ={{id: 4, value: 5}}/>
        <Board2 obj ={{id: 5, value: 4}}/>
        <Board2 obj ={{id: 6, value: 3}}/>
        <Board2 obj ={{id: 7, value: 2}}/>
        <Board2 obj ={{id: 8, value: 1}}/>
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
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);

