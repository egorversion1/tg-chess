import React from 'react';


class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Board2 extends React.Component {
  
  renderSquare(i) {
    return <Square value = {i + this.props.value}/>;
  }

  render() {
    
    return (
      <div className='BoardRow'>
          {this.renderSquare('a')}
          {this.renderSquare('b')}
          {this.renderSquare('c')}
          {this.renderSquare('d')}
          {this.renderSquare('e')}
          {this.renderSquare('f')}
          {this.renderSquare('g')}
          {this.renderSquare('h')}
      </div>
    );
  }
}

export default Board2