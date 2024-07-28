import "primeicons/primeicons.css";

import React, { useState } from "react";

import { Button } from "primereact/button";
import Navbar from "../../service/Navbar";
import matricula from "../../../assets/matricula.svg";
import menu from "../../../assets/menu.svg";
import profile from "../../../assets/profile_prof.svg";
import style from "../style/User.module.css";
import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();

  async function handleHorario(event) {
    event.preventDefault();
    navigate("/admin/freq");
  }

  async function handleRegistration(event) {
    event.preventDefault();
    navigate("/admin/matricula");
  }

  const [visible, setVisible] = useState(false);

  return (
    <section className={style.contAdmin}>
      <div className={style.gridOneAdmin}>
        <Navbar />
        <img src={profile} className={style.profileAdmin} alt="Image" />
        <h3 className={style.credentialAdmin}>Fulano de Ciclano Beltrano</h3>
        <p className={style.credentialAdmin}>fulano.ciclano@facul.sp.gov.br</p>
        <p className={style.credentialAdmin}>RA: 1234567891234</p>
      </div>
      <div className={style.gridAdmin}>
        <Button className={style.buttonAdmin} onClick={handleHorario}>
          <img className={style.iconAdmin} src={matricula} alt="" />
          Frequencia
        </Button>
        <Button className={style.buttonAdmin} onClick={handleRegistration}>
          <img className={style.iconAdmin} src={matricula} alt="" />
          Notas
        </Button>
      </div>
    </section>
  );
};

export default AdminLayout;
