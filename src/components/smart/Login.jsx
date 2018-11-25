import React from 'react';
import {Link} from 'react-router-dom'
import DisplayTitle from '../dumb/DisplayTitle'

const Login = () => (
    <div className="login component-container">
        <form>
            <DisplayTitle classname={"form-title"} title={"Log In"} />
            <div className="form-group">
                <input className="form-control" type="email" name="email" placeholder="email" required/>
            </div>
            <div className="form-group">
                <input className="form-control" type="password" name="password" placeholder="Password" required/>
            </div>
            <div className="form-group">
            <button type="button" className="btn btn-dark">Log In</button>
            </div>
            <Link to="/signup">Not a user? Create an account</Link>
        </form>
    </div>
);
 
export default Login;