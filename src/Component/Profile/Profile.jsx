import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';

const Profile = () => {
const [userName, setUserName] = useState(null);

useEffect(() => {

   const data =  jwtDecode(localStorage.getItem("tkn"))
   setUserName(data.name)

}, []);


    return <>
    
    <h1 className='d-flex justify-content-center align-items-center' style={{minHeight:"44vh" , textTransform:"capitalize"}}>Welcome {userName}</h1>
    
    </>
}

export default Profile;
