import React from 'react'

export default function DropDown(props) {

    return (
        <div>
            <button onClick={() => props.banana(props.id)}>Dropdown</button>
            <div>{"" + props.open}</div>
        </div>
    )
}
