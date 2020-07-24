import './Card.css'

import React from 'react'

export default props => {

    const card_style = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        <div className="card" style={card_style}>
            <div className="title">{props.title}</div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}