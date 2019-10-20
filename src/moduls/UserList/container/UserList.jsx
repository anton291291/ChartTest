import React, {useEffect,useState} from 'react';

import Api from '../../../utils/api/data'

import {UserList} from '../../../components'


const UserListContainer = (props) => {

  const [Data,setData] = useState()

  useEffect (() => {
     Api.get().then((result) => {
        setData(result.data.data.user_list)
      })
  },[])

  return (
    <UserList userData={Data}/>
  )
}

export default UserListContainer;
