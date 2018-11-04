import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from '../smart/Login';
import Signup from '../smart/Signup';
import StockInfo from '../smart/StockInfo';

class MainSection extends Component{
    render(){
        return(
            <Router>
                <div className="main_body_wrapper">
                    <Route path="/" render={() => {
                        return(
                            <div>
                                <h1>Main Section</h1>
                                <Link to="/">Home</Link>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Signup</Link>
                                <Link to="/stock_info">Stock Info</Link>
                            </div>
                        )
                    }} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/stock_info" component={StockInfo} />
                </div>
            </Router>
        );
    }
}

export default MainSection;