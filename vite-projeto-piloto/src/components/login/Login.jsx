import { Route, Routes } from 'react-router-dom';

import LoginForgotPassword from './form/LoginForgotPassword';
import LoginForm from './form/LoginForm';
import React from "react";
import style from "./style/Login.module.css";

const Login = () => {
  return (
    <section className={style.login}>
      <div className={style.forms}>
        <Routes>
            <Route path='/' element={<LoginForm />}/>
            <Route path='lost' element={<LoginForgotPassword />}/>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
