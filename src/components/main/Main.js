import React from 'react'
import Chessboard from '../chessboard/Chessboard'
import './main.css'

function Main({theme,toggleTheme}) {
  return (
    <div className='main-container' id={theme}>
        <div className='header-container'>
        <h1 className='board-title'>Chess Board</h1>
            <span className='theme-icon'>
                {theme==='light'?  <img src='/moon.png' onClick={()=>toggleTheme()} className='icons' alt='icons'/>:  <img src='/sun.png' onClick={()=>toggleTheme()} className='icons' alt='icons'/>}         
            </span>
        </div>
        <div className='chess-container'>
        <Chessboard/>
        </div>
    </div>
  )
}

export default Main
