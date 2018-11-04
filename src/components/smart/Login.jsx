import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import DisplayTitle from '../dumb/DisplayTitle'

class Login extends Component {
    render() { 
        return ( 
            <div className="login_container">
                <form>
                    <DisplayTitle value={"Log In"} />
                    <div className="form-group">
                        <input className="form-control" type="email" name="email" placeholder="email" required/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Log In" />
                    </div>
                    <Link to="/signup">Not a user? Create an account</Link>
                </form>
            </div>
         );
    }
}
 
export default Login;

//<button type="button" className="btn btn-dark">Log In</button>