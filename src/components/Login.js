import React from 'react';

const Login = () => (
    <div>
        <h1>Returning User</h1>
        <form action="">
            
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email@domain.com" />
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password"/>
        </form>
    </div>
)

export default Login;