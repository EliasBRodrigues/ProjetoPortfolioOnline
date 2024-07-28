import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import { handleLogError, parseJWT } from "../../service/JWT";

import { Button } from 'primereact/button';
import Input from "./components/Input";
import { Routes } from "../../service/Routes";
import { Toast } from 'primereact/toast';
import icon from "../../../assets/user.svg";
import icon2 from "../../../assets/password.svg";
import siga from "../../../assets/siga.svg";
import style from "./style/InputButton.module.css";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const Auth = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const toast = useRef(null)

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    if (!(username && password)) {
      toast.current.show({severity:'error', summary: 'Error', detail:'CAN NOT BE EMPTY', life: 3000});
      setUsername("");
      setPassword("");
      setLoading(false)
      return;
    }

    try {
      const response = await Routes.authenticate(username, password);
      const { accessToken } = response.data;
      const data = parseJWT(accessToken);
      const authenticatedUser = { data, accessToken };
      Auth.userLogin(authenticatedUser);
      toast.current.show({ severity: 'success', summary: 'Success', detail: 'Welcome back!', life: 3000 });
      setTimeout(() => {
        setLoading(false);
        if(data.rol == 'USER'){
          navigate('/user');
        } else  {
          navigate('/admin');
        }
        setUsername("");
        setPassword("");
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        toast.current.show({severity:'error', summary: 'Error', detail:'USER NOT FOUND OR INCORRECT PASSWORD', life: 3000});
        setLoading(false)
        handleLogError(error);
      }, 3000)
    }
  };
 
  return (
    <div>
      <img className={style.siga} src={siga} alt="siga-logo" />
      <form className={style.form} onSubmit={handleSubmit}>
        <img className={style.icon} src={icon} alt="" />
        <Input placeholder="Username" type="text" name="username" {...username} onChange={(e) => { setUsername(e.target.value)}}/>
        <img className={style.icon} src={icon2} alt="" />
        <Input placeholder="Password" type="password" name="password" {...password} onChange={(e) => { setPassword(e.target.value)}}/>
        <Link className={style.lost} to="/lost">Esqueceu a senha?</Link>
        <Toast ref={toast} className={style.toast}/>
        <Button onSubmit={handleSubmit} icon="pi pi-check" className={style.button}  loading={loading}>Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
