import React from 'react';

const FormTextInput = props => (
    <div className="form-group">
        <input className="form-control" type="text" name={props.inputName} placeholder={props.inputName} required />
    </div>
)

export default FormTextInput;