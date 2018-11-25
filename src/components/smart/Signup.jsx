import React from 'react';
import {Link} from 'react-router-dom';
import DisplayTitle from '../dumb/DisplayTitle'

const Signup = () => (
    <div className="signup component-container">
        <form>
            <DisplayTitle classname="form-title" title={"Sign Up"} />
            <div className="form-group">
                <input className="form-control" type="text" name="first_name" placeholder="First Name" />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" name="last_name" placeholder="Last Name"/>
            </div>
            <div className="form-group">
                <input className="form-control" type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" name="password" placeholder="Password"/>
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-dark">Sign Up</button>
            </div>
            <Link to="/login">Already a user? Log in here.</Link>
        </form>
    </div>
)

export default Signup;