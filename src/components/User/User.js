import React from 'react';

const User = ({user}) => {
    const {id, name, username, email} = user
    return (
        <div>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{username}</h1>
            <h1>{email}</h1>
        </div>
    );
};

export {User};