import { Navigate, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import AdminClass1 from './sections/components/admin-components/AdminClass1'
import AdminFreq from './sections/components/AdminFreq'
import AdminLayout from './sections/AdminLayout'
import { useAuth } from '../context/AuthContext'

const Admin = () => {
  const Auth = useAuth()
  const user = Auth.getUser()
  const [isUser, setIsUser] = useState(true)

  useEffect(() => {
    setIsUser(user.data.rol[0] == 'ADMIN')
  }, [])
  
  if(!isUser){
    return <Navigate to={"/login"}/>
  }
  return (
    <section>
      <Routes>
        <Route path='/*' element={<AdminLayout />}/>
        <Route path='freq' element={<AdminFreq />}/>
        <Route path='dsm1' element={<AdminClass1 />}/>
      </Routes>
    </section>
  )
}

export default Admin
