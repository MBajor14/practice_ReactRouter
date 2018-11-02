import React from 'react';

const DisplayField = props => (
    <div>
        {
            props.d_key && props.value && <p>
                <span class="display-field-key">{props.d_key}:</span> 
                <span class="display-field-value">{props.value}</span>
            </p>
        }
    </div>
)

export default DisplayField;