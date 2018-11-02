import React from 'react';

const DisplayTitle = props => (
    <div>
        {
            props.value && <p>
                <h1>
                    {props.value}
                </h1>
            </p>
        }
    </div>
)

export default DisplayTitle;