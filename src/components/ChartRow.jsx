import React from 'react';


export function ChartRow(props) {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.genre}</td>
            <td>{props.artist}</td>
            <td>{props.labels}</td>
            <td>{props.stock}</td>
        </tr>
    )
}


