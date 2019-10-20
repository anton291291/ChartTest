import React from 'react';

import './UserItem.scss'

import { ListGroupItem } from 'reactstrap';

const UserItem = (props) => {

const {name, age} = props;

  return (
      <ListGroupItem>
        <span className="usersItem-block__userName">Name: {name}<br/></span>
        <span className="usersItem-block__userAge">Age: {age}</span>
      </ListGroupItem>
  );
}

export default UserItem;
