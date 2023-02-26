import React, { useState } from 'react'
import './chessboard.css'

function Chessboard() {
    const [selectedCell, setSelectedCell] = useState(null);
    const [possibleMoves, setPossibleMoves] = useState([]);
    const squares = [];

    const handleCellClick = (row, col) => {
        setSelectedCell({ row, col });
        setPossibleMoves(getPossibleMoves(row, col));
    };

    const getSquareColor = (row, col) => {
        const isEvenRow = row % 2 === 0;
        const isEvenCol = col % 2 === 0;

        if ((isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol)) {
            return "white-square";
        } else {
            return "black-square";
        }
    };

    const getPossibleMoves = (row, col) => {
        const possibleMoves = [];

        const moves = [
            { row: -2, col: -1 },
            { row: -2, col: 1 },
            { row: -1, col: -2 },
            { row: -1, col: 2 },
            { row: 1, col: -2 },
            { row: 1, col: 2 },
            { row: 2, col: -1 },
            { row: 2, col: 1 },
        ];

        moves.forEach((move) => {
            const newRow = row + move.row;
            const newCol = col + move.col;

            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                possibleMoves.push({ row: newRow, col: newCol });
            }
        });
        return possibleMoves;
    };

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const isPossibleMove = possibleMoves.some(
                (move) => move.row === i && move.col === j
            );
            squares.push(<div
                className={`square ${getSquareColor(i, j)} ${isPossibleMove ? "possible-move" : ""
                    } ${selectedCell?.row === i && selectedCell?.col === j ? "selected" : ""}`}
                key={`${i}-${j}`}
                onClick={() => handleCellClick(i, j)}
            />);
        }
    }

    return (
        <div className='board-container'>
            <div className='board'>
                {squares}
            </div>
        </div>
    )
}

export default Chessboard
