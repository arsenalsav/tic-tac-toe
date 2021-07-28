import React, { useState } from 'react'
import Board from './Board.jsx';
import FigureChoose from './FigureChoose.jsx';
import '../styles/index.css';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [weAreNext, setWeAreNext] = useState(true)
    const [ourFigure, setOurFigure] = useState(null)
    const [botFigure, setBotFigure] = useState(null)
    const winner = checkWinner(board)

    const handleChooseFigure = (figure) => {
        setOurFigure(figure)
        console.log(figure);
        figure === 'X' ? setBotFigure('O') : setBotFigure('X')
    }

    const handleChooseCell = (index) => {
        const boardCopy = [...board]

        if (winner || !weAreNext || boardCopy[index]) return
        boardCopy[index] = ourFigure
        let res = [];

        for (let i = 0; i < boardCopy.length; i++) {
            if (boardCopy[i] == null) res.push(i);
        }
        let item = res[Math.floor(Math.random() * res.length)];
        ;
        setBoard(boardCopy)
        setWeAreNext(!weAreNext)
        setTimeout(() => {
            boardCopy[item] = botFigure
            setBoard(boardCopy)
            setWeAreNext(weAreNext)
        }, 3000)
    }

    return (
        <div className="wrapper d-flex flex-column">
            <button type="button" class="btn btn-secondary mb-5" onClick={() => {setBoard(Array(9).fill(null)); setOurFigure(null)}}>Почати нову гру </button>


            {ourFigure === null ?
                <FigureChoose figure={ourFigure} choose={handleChooseFigure} />
                :
                <div className="gameInfo">
                    <p className="h2 mt-4 text-white"> Ваша фігура {ourFigure}</p>
                    <Board cells={board} click={handleChooseCell} />
                    <p className="h2 mt-4 text-white">
                        {winner ? 'Переможець ' + winner : 'Хід робить ' + (weAreNext ? ourFigure : botFigure)}
                    </p>
                </div>
            }
        </div>
    )
}
export default TicTacToe;

const checkWinner = (cells) => {
    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < combinations.length; i++) {
        const [a, b, c] = combinations[i]
        if (cells[combinations[i][0]] &&
            cells[combinations[i][0]] === cells[combinations[i][1]] &&
            cells[combinations[i][0]] === cells[combinations[i][2]]) {
            return cells[a]
        }
    }
    return null
}