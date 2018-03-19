import React from 'react';
import { Link, Route } from 'react-router-dom';
import users from './fakeDatabase';
import './Team.css'


const getUserByID = (users, id) => users.find(u => u.id === id);

const Team = (props) => {


  return (
    <div className= 'Team'>
      

      <ul className="StackList">
        <li className="StackList__item">
          <Link to={`${props.match.path}/id_mango`}> Mango </Link>
        </li>
        <li className="StackList__item">
          <Link to={`${props.match.path}/id_ajax`}> Ajax </Link>
        </li>
        <li className="StackList__item">
          <Link to={`${props.match.path}/id_poly`}> Poly </Link>
        </li>
      </ul>



      <Route
        path="/about/team/:userID"
        render= { (props)=> {

        const userID = props.match.params.userID;
        const user = getUserByID(users, userID);

        return (
          <div>
          <h1>Name: {user.name}</h1>
          <h3>Position: {user.position}</h3>
          </div>
          );
        }}
        
      />

    </div>
  );

  
};

export default Team;