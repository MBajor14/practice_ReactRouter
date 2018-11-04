import React from 'react';

const DisplayTitle = props => (
    <div className={props.classname}>
        {
            props.title && <p>
                <h1>
                    <strong>{props.title}</strong>
                </h1>
            </p>
        }
    </div>
)

export default DisplayTitle;