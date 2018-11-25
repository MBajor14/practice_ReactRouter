import React from 'react';
import UserInfo_Avatar from './UserInfo_Avatar';
import UserInfo_Details from './UserInfo_Details';

const UserInfo = props => (
    <div className="userInfo component-container">
        <UserInfo_Avatar />
        <UserInfo_Details />
    </div>
)

export default UserInfo;