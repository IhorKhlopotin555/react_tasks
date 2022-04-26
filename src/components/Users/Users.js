import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../User/User";



const Users = () => {
    const[user,setUser] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data}) => {
            setUser(data)
            setUsers(data)
        })

    }, []);



const searchHandler = (e) => {


    let char = e.target.value

    if (char) {
        setUsers(users.filter(user => user.name.includes(char) || user.username.includes(char) || user.email.includes(char)))
    }


    else {
        setUsers(user)
        console.log(user);
        console.log(users);
    }
    console.log(char)
}

    return (
        <div>

                <div><label>Search:<input type="text" onChange={searchHandler}/></label></div>

                <div>{users && users.map(user=><User key={user.id} user={user}/>)}</div>


        </div>
    );
};

export {Users};
