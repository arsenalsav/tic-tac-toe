import React from 'react'

const Cell = (props) =>{
    return (
        <button className="cell d-flex border border-dark border-3" onClick={props.onClick}>{props.value}</button>
    )
}
export default Cell