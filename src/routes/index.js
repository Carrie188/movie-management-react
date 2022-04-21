import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import PrivateSection from 'routes/PrivateSection';
import PublicRoutes from 'routes/PublicRoutes';


function Routes() {
    // useLocation() returns an object with properties: pathname, search, hash,state...
    // here we just need pathname
    const { pathname } = useLocation(); 
    const [isUserLoggedIn, setIUserLoggedIn] = useState(false);
    
    console.log(pathname);
    //get current window size
    const [width, height] = useWindowSize();
    console.log("current windowSize: "+width +", "+ height);
    // let loginStatus = localStorage.getItem("isUserLoggedIn");
    // setIUserLoggedIn(true);
   
   

    useEffect(() => {
        window.scrollTo(0, 0);
        if(sessionStorage.getItem("user-info")!=null){
        
            setIUserLoggedIn(true)
            console.log("User Info: "+ sessionStorage.getItem("user-info"))
        }else{
            setIUserLoggedIn(false)
            console.log("No user log in...")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname,isUserLoggedIn]);

    // check if user login or not to render private or public view
   
    return isUserLoggedIn ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
