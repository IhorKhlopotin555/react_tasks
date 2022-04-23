import React from 'react';
import User from "../user/User";
import UserDetails from "../user_details/UserDetails";
import css from './Compon_1.module.css'
import userDetails from "../user_details/UserDetails";

const Compon1 = () => {
    const users = [
        {id:1, login:'Login', password:'1234'},
        {id:2, login:'Login', password:'4321'},
        {id:3, login:'Login', password: '2134'}
    ]
    const usersdetails = [
        {id:1, first_name:'Oleh', last_name:'Vynnyk', email:'lyavynnya123@gamil.com', phone:'+380967832345'},
        {id:2, first_name:'Stasyan', last_name:'Konopatyi', email:'konoptatyi123@gamil.com', phone:'+380667832345'},
        {id:3, first_name:'Viktoria', last_name:'Popelyiasta', email:'popelyaka123@gamil.com', phone:'+380507832345'}
    ]
    return (
        <div className={css.wrapper}>
            <div>{usersdetails.map(usersdetail=><UserDetails key={userDetails.id} userdetails={usersdetail}/>)}</div>
            <div>{users.map(user=><User key={user.id} user={user}/>)}</div>
            />
        </div>
    );
};

export default Compon1;