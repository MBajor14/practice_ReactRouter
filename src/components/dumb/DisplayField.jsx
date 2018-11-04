import React from 'react';

const DisplayField = props => (
    <div>
        {
            props.d_key && props.value && <p>
                <div class="display-field-key">{props.d_key}</div> 
                <div class="display-field-value">{props.value}</div>
            </p>
        }
    </div>
)

export default DisplayField;