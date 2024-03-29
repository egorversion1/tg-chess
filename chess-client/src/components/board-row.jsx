import React from 'react';


class Square extends React.Component {
  render() {
    if(this.props.id % 2 === 0){
      return (
        <button className="square"  style={{background: "black", color: "white"}}>
          {this.props.value}
        </button>
      );
    }
    else{
      return (
        <button className="square"  style={{background: "white", color: "black"}}>
          {this.props.value}
        </button>
      );
    }
  }
}

class Board2 extends React.Component {
  
  renderSquare(i) {
    return <Square value = {i + this.props.obj.value} id ={this.props.obj.id}/>;
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