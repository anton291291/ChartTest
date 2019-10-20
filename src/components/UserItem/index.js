import React from 'react';

import './UserItem.scss'

const UserItem = (props) => {

const {name, age} = props;

console.log('props', props);
  return (
    <div className="usersItem-block">
      <span className="usersItem-block__userName">Name:{name}</span>
      <span className="usersItem-block__userAge">Age:{age}</span>
    </div>
  );
}

export default UserItem;
