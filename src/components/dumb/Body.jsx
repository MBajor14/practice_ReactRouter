import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../smart/Login';
import Signup from '../smart/Signup';
import StockInfo from '../smart/StockInfo';
import UserInfo from '../dumb/UserInfo'

const Body = () => {
    return(
        <div className="body-container container">
            <Route path="/" exact render={()=>{return(<h1 id="homepageTemp">Home Page</h1>)}} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/stock-info" component={StockInfo} />
            <Route path="/user-info" component={UserInfo} />
        </div>
    );
}

export default Body;