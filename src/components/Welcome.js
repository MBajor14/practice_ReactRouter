import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Welcome extends Component {
    state = { 
        toLogin: false,
        toSignup: false
     }

     handleclick = (event) => {
        if (event.target.name === "login"){
            this.setState({toLogin: true});
        }
        else if(event.target.name === "signup"){
            this.setState({toSignup: true});
        }
     }

    render() { 
        if(this.state.toLogin === true){
            return <Redirect to='/login' />
        }
        else if(this.state.toSignup === true){
            return <Redirect to='/signup' />
        }

        return ( 
            <div>
                <h2>Welcome</h2>
                <button onClick={this.handleclick} name="login">Log In</button>
                <button onClick={this.handleclick} name="signup">Sign Up</button>
            </div>
         );
    }
}
 
export default Welcome;