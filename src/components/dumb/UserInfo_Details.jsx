import React from 'react';
import DisplayField from './DisplayField';

const UserInfo_Details = props => (
    <div className="userInfo-details">
        <DisplayField d_key={"Name"} value={"John Doe"} />
        <DisplayField d_key={"Email"} value={"john.doe@MIDAS.com"} />
    </div>
)

export default UserInfo_Details;