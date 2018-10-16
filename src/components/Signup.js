import React from 'react';

const Signup = () => (
    <div className="signup_form">
        <h1>New User</h1>
        <form action="">
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" placeholder="John" />
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" placeholder="Smith"/>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email@domain.com" />
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password"/>
        </form>
    </div>
)

export default Signup;