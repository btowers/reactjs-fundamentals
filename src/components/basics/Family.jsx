import React, { cloneElement } from 'react'

export default props => {

    return (
        <div>
            {
                React.Children.map(props.children, child => {

                    return cloneElement(child, props) // it works only if has a single child
                })
            }
        </div>
    )
}