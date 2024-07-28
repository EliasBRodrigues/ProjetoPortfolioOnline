import "primeicons/primeicons.css";

import { Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Navbar from "../service/Navbar";
import UserBoletim from "./sections/components/UserBoletim";
import UserFrequency from "./sections/components/UserFrequency";
import UserHour from "./sections/components/UserHour";
import UserLayout from "./sections/UserLayout";
import UserRegistration from "./sections/components/UserRegistration";
import { useAuth } from "../context/AuthContext";

const User = () => {
  const Auth = useAuth()
  const user = Auth.getUser()
  const [isUser, setIsUser] = useState(true)

  useEffect(() => {
    setIsUser(user.data.rol[0] == 'USER')
  }, [])
  
  if(!isUser){
    return <Navigate to={"/login"}/>
  }
  return (
    <section>
      <Routes>
        <Route path="/*" element={<UserLayout />} />
        <Route path="horario" element={<UserHour />}/>
        <Route path="boletim" element={<UserBoletim />}/>
        <Route path="frequencia" element={<UserFrequency />}/>
        <Route path="matricula" element={<UserRegistration />} />
      </Routes>
    </section>
  );
};

export default User;
