import React, {useState} from 'react';
import "./Game.css"
import Board from "./Board";
import {calculateWinner} from "../helper";

const Game = () => {
    const [board , setBoard] = useState(Array(9).fill(null))
    const [xIsNext ,setXIsNext ] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]

        //визначити чи був клік по колонці або гра закінчена
        if(winner || boardCopy[index]) return

        //визначити чий хід Х чи О
        boardCopy[index] = xIsNext ? "X" : "O"

        //Обновити наш стейт
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }
        const starrNewGame = () => {
        return (
            <button className="startBtn" onClick={() => setBoard(Array(9).fill(null))}>New GAME</button>
        )
        }



    return (
        <div className="wrapper">
            {starrNewGame()}
            <Board squares={board} click={handleClick}/>
            <p className="game">
                {winner ? "Win " + winner : "now go " + (xIsNext ? "X" : "O")}
            </p>
        </div>
    );
};

export default Game;