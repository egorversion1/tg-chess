import React from 'react';
import ReactDOM from 'react-dom/client';
import Board2 from './components/board-row';
import './index.css';


class Board extends React.Component {
  render() {
    
    return (
      <div>
        <Board2 value ={8}/>
        <Board2 value ={7}/>
        <Board2 value ={6}/>
        <Board2 value ={5}/>
        <Board2 value ={4}/>
        <Board2 value ={3}/>
        <Board2 value ={2}/>
        <Board2 value ={1}/>
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

