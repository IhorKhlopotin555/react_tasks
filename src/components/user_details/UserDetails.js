import React from 'react';
import css from './UserDetails.module.css'
const UserDetails = ({userdetails}) => {
const {first_name, last_name, email, phone} = userdetails;
    return (
        <div className={css.wrapper}>
            <h1>{first_name}</h1>
            <h1>{last_name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
        </div>
    );
};

export default UserDetails;