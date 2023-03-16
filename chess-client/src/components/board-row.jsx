import React from 'react';
import '../index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        
      </button>
    );
  }
}

class Board2 extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    
    return (
      <div className='BoardRow'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}

      </div>
    );
  }
}

export default Board2