import React from 'react';
import {Link} from 'react-router-dom';

import {ChangePagesBtn} from '../../components';
import {UserListContainer} from '../../moduls';
import ScrollAnimation from 'react-animate-on-scroll';

const UserListPage = () => {

  return(
    <>
    <ScrollAnimation
      animateIn='fadeIn'
      duration={2.5}
      offset={5}
    >
    <Link to='/'>
      <ChangePagesBtn text='Go to chart'/>
    </Link>
    <UserListContainer/>
    </ScrollAnimation>
    </>
  )
}

export default UserListPage;
