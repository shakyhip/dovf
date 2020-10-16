import React from 'react'

const Box = (props) => {
    const { msg } = props;
    return (
        <div className="card">
            <div className="card-body">
                {msg}
            </div>
        </div>
    )
}

export default Box
