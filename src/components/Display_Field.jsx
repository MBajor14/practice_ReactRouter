import React from 'react';

const Display_Field = props => (
    <div>
        {
            props.d_key && props.value && <p>
                {props.d_key}: {props.value}
            </p>
        }
    </div>
)

export default Display_Field;