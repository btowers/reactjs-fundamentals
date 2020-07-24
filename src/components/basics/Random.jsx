import React from 'react'

export default props => {

    const { min, max } = props

    const random_number = parseInt(Math.random() * (max - min) + min)

    return (
        <div>
            <h2>Random Number</h2>
            <p>Random number between {min} and {max - 1} is: {random_number}</p>
        </div>
    )
}