import React from 'react';

import {UserItem} from '../index';

import { ListGroup} from 'reactstrap';

import './UsersList.scss'


const UserList = (props) => {

  const {userData} = props;

  return (
    <div className="container">
      <h2>List of Users</h2>
      <div className="usersList-block">
        <ListGroup>
          {userData && userData.map((item,index) => <UserItem  {...item}  key={index}/>

          )}
        </ListGroup>
      </div>
    </div>
  );
}

export default UserList;
