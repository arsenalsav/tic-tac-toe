import React from 'react';

const FigureChoose = (props) => {
    console.log(props.figure===null)
    return (
        <div className="fifureChoose d-flex mb-3">
             <button className="cell d-flex border border-dark border-3" onClick={() => props.choose('O')}>O</button>
             <button className="cell d-flex border border-dark border-3" onClick={() => props.choose('X')}>X</button>
        </div>
    );
}

export default FigureChoose