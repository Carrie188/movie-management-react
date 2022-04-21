import {useEffect, useState} from 'react'
import UserService from 'services/UserService';

export const useUsersData = () => {

    const [users, setUsers] = useState([]);
    const [errMsg, setErrMesg] = useState();
    useEffect(()=>{
        UserService.getAllUsers().then((response)=>{
            setUsers(response.data)
            // console.log(users);
        }).catch((err)=>{
            
            setErrMesg(err.response.data.message);
            // since the message configured to put in the message attribute at backend
        })
    })

  return {users, errMsg}
}
