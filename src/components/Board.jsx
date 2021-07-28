import React from 'react';
import Cell from './Cell.jsx';

const Board = ({cells, click}) => {
    return (
        <div className="board d-flex flex-wrap">
           {
               cells.map((cell, i) => (
                   <Cell key={i} value={cell} onClick={() => click(i)} />
               ))
           }
        </div>
    );
}

export default Board