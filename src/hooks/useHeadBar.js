import {useEffect,useState} from 'react'
import UserService from 'services/UserService';

const useHeadBar = () => {
    const [user, setUser] = useState({});
    useEffect(()=>{
        const userId = JSON.parse(sessionStorage.getItem("user-info")).id;

        UserService.getUserById(userId).then((response)=>{
          setUser(response.data);
        }).catch((err)=>{
          console.log(err.response);
        })



    },[])



  return user
}

export default useHeadBar