import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from '../smart/Login';
import Signup from '../smart/Signup';
import StockInfo from '../smart/StockInfo';

class MainSection extends Component{
    render(){
        return(
            <div className="main_body_wrapper">
                <Route path="/" render={()=>{return(<h1>Main</h1>)}} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/stock_info" component={StockInfo} />
            </div>
        );
    }
}

export default MainSection;