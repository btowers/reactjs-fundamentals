import React from 'react'

export default function ComponentWithParams(props) {

    const status = props.note >= 7 ? 'APPROVED' : 'DISAPPROVED'

    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                <strong>{props.student}</strong> has note <strong>{props.note}</strong>: <strong>{status}</strong>
            </p>
        </div>
    )
}