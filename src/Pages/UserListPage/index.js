import React from 'react';
import {Link} from 'react-router-dom';

import {ChangePagesBtn} from '../../components';
import {UserListContainer} from '../../moduls';

const UserListPage = () => {

  return(
    <>
    <Link to='/'>
      <ChangePagesBtn/>
    </Link>
    <UserListContainer/>
    </>
  )
}

export default UserListPage;
