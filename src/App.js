import logo from './logo.svg';
import './App.css';

import AddUser from "./componets/Users/AddUser" ;
import UserList from './componets/Users/UserList';
import { useState } from 'react';

function App() {

  const [userList, setUserList ]  = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    
    setUserList((prevUserList)=> {
      return [...prevUserList, {name : uName, age: uAge, id:Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users = {userList}/>
    </div>);
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
