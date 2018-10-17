import React from 'react';
import {Redirect} from 'react-router-dom';

const Signup = () => (
    <div className="component_container">
        <h1>New User</h1>
        <form className="component_form" action="">
            <div className="form_field">
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" placeholder="John" />
            </div>
            <div className="form_field">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" placeholder="Smith"/>
            </div>
            <div className="form_field">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email@domain.com" />
            </div>
            <div className="form_field">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="password"/>
            </div>
        </form>
    </div>
)

export default Signup;