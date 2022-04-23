import React from 'react';
import css from './User.module.css'
const User = ({user}) => {
    const {login, password} = user;
    return (
        <div className={css.wrapper}>
            <h1>{login}</h1>
            <h1>{password}</h1>
        </div>
    );
};

export default User;