import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import uid from 'uid'

class App extends Component {

  constructor(){
    super()
    this.state = {
      turn: 'X',
      gameEnd: false,
      winner: undefined,
      squares:''
    }
    this.gameState={
      //board: Array(9).fill(''),
      totalMoves: 0
    }
  }
componentWillMount(){
    //console.log("hi little"),
    this.restart()

  }
  clicked(e){
    console.log(e.target)
  }
  restart(){

    this.gameState.board= Array(9).fill(''),
    this.setState({
      gameEnd:false,
      winnerLine: '',

      squares: <div id= "board" onClick={(e)=>{this.clicked}}>
        {
          
          this.gameState.board.map((square,key)=>{
            return <div className= "square" data-square={key} key={uid}> </div>

          } )
        }
        </div>
    })
  }


  render() {
    return (<div id= "game">
      <div id= "satus"> {this.state.winnerLine}</div>
      <div id= "head"> triky </div>
      <div> {this.state.squares} </div>
    </div>)
  }
}

export default App;
