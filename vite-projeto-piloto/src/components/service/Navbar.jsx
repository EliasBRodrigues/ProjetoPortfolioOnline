import "primeicons/primeicons.css";

import React, { useRef, useState } from 'react'

import { Button } from "primereact/button";
import { Link } from 'react-router-dom'
import { Sidebar } from "primereact/sidebar";
import { Toast } from "primereact/toast";
import menu from "../../assets/menu.svg";
import siga from "../../assets/siga.svg";
import style from "../user/style/User.module.css";
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
    const { getUser, isUserAuthenticate, userLogout } = useAuth()
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const logout = () => {
      toast.current.show({severity:'info', summary: 'Loading...', detail:'User Exit System'});
      setTimeout(() => {
        userLogout()
      }, 2000)
    }

    const logoutMenuStyle = () => {
      return isUserAuthenticate() ? { "display": "block" } : { "display": "none" }
    }
 
    const getUserName = () => {
      const user = getUser()
      return user ? user.data.username : ''
    }
  return (
    <div>
      <Toast ref={toast} position="top-center"/>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <img className={style.menu} src={siga} alt="" />
          <Link style={logoutMenuStyle()} onClick={logout}>Sair</Link>
        </Sidebar>
        <Button onClick={() => setVisible(true)}>
          <img className={style.menu} src={menu} alt="" />
        </Button>
    </div>
  )
}

export default Navbar
