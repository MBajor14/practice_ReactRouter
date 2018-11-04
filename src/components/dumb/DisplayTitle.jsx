import React from 'react';

const DisplayTitle = props => (
    <div className={props.classname}>
        {
            props.title && <h1>
                    <strong>{props.title}</strong>
            </h1>
        }
    </div>
)

export default DisplayTitle;