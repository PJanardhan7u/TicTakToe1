import React from 'react'
import './TicTakToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'
import { useState } from 'react'


let data=["","","","","","","","",""]

let winner=""

 const TicTakToe = () => {

  let [count,setCount]=React.useState(0)
  let [lock,setLock]=React.useState(false)

  const resetGame=()=>{
    setCount(0)
    setLock(false)
    data=["","","","","","","","",""]
    let boxes=document.querySelectorAll('.boxes')
    boxes.forEach(box=>{
      box.innerHTML=""
    })

    document.getElementById("winnerText").innerHTML=``

  }




  const checkWinner=()=>{
    // checking in rows
     if(data[0]=== data[1] && data[1]=== data[2]){
      winner=data[0]
        
     }
     if(data[3]=== data[4] && data[4]=== data[5]){
      winner=data[3]

     }
      if(data[6]=== data[7] && data[7]=== data[8]){
        winner=data[6]

      }

      // checking in columns
      if(data[0]=== data[3] && data[3]=== data[6]){
        winner=data[0]
     
      }
      if(data[1]=== data[4] && data[4]=== data[7]){
        winner=data[1]

      }
      if(data[2]=== data[5] && data[5]=== data[8]){
        winner=data[2]

      }

      // checking in diagonals
      if(data[0]=== data[4] && data[4]=== data[8]){
        winner=data[0]

      }
      if(data[2]=== data[4] && data[4]=== data[6]){
        winner=data[2]

      }

      if(winner!=="")
      {
        return true
      }
      else
      {
        return false
      }

      
  }

  const toggle=(e,num)=>{
    if(lock)return 0;
    if(count%2===0){
      e.target.innerHTML=`<img src=${cross_icon} alt="cross" />`
      data[num]="X"
      
      }
    else
    {
      e.target.innerHTML=`<img src=${circle_icon} alt="circle" />`
      data[num]="O"
      
    }
    setCount(count+1)

    if(count>=4){
      if(checkWinner())
      {
        setLock(true)
        document.getElementById("winnerText").innerHTML=`<h1>Winner is ${winner}</h1>`
        
      }
    }

  }


  return (
    <div className='container'>
      <h1 className='title'>Tic Tac Toe </h1>
      <p id="winnerText"></p>
      <div className="board">

        <div className="row1">
          <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
        </div>

        <div className="row2">
          <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
        </div>

        <div className="row3">
          <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
        </div>

      </div>
      <button className='reset' onClick={resetGame}>Reset</button>

    </div>
  );
}

export default TicTakToe