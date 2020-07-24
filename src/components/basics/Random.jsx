import React from 'react'

export default props => {

    const { min, max } = props

    const random_number = parseInt(Math.random() * (max - min) + min)

    return (
        <div>
            <h3>Random Number</h3>
            <p>Random number between {min} and {max - 1} is: {random_number}</p>
        </div>
    )
}