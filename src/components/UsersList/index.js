import React from 'react';

import {UserItem} from '../index';



const UserList = (props) => {

  const {userData} = props;

  return (
    <div className="container">
      <h2>List of Users</h2>
      <div className="usersList-block">
        {userData && userData.map((item,index) => <UserItem  {...item}  key={index}/>
        )}
      </div>
    </div>
  );
}

export default UserList;
