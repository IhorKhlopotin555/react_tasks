import './App.css';
import Compon_1 from "./components/compon_1/Compon_1";
import User from "./components/user/User";
import UserDetails from "./components/user_details/UserDetails";


function App() {
    // const users = [
    //     {id:1, login:'login', password:'1234'},
    //     {id:2, login:'login', password:'4321'},
    //     {id:3, login:'login', password: '2134'}
    // ]
    // const usersdetails = [
    //     {id:1, first_name:'Oleh', last_name:'Vynnyk', email:'lyavynnya123@gamil.com', phone:'+380967832345'},
    //     {id:2, first_name:'Stasyan', last_name:'Konopatyi', email:'konoptatyi123@gamil.com', phone:'+380667832345'},
    //     {id:3, first_name:'Viktoria', last_name:'Popelyiasta', email:'popelyaka123@gamil.com', phone:'+380507832345'}
    //]
  return (
      <div>
          {/*{users.map(user=><User login={user.login} password={user.password}/>)}*/}
          {/*{usersdetails.map(usersdetail=><UserDetails first_name={usersdetail.first_name} last_name={usersdetail.last_name} email={usersdetail.email} phone={usersdetail.phone}/>)}*/}
          <Compon_1/>
      </div>
  );
}

export default App;
