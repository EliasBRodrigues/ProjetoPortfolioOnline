import "primeicons/primeicons.css";

import { Button } from "primereact/button";
import Navbar from "../../../service/Navbar";
import React from "react";
import matricula from "../../../../assets/turma.svg";
import style from "../style/UserFrequencia.module.css";
import { useNavigate } from "react-router-dom";

const AdminFreq = () => {
  const navigate = useNavigate();

  async function handleHorario(event) {
    event.preventDefault();
    navigate("/admin/dsm1");
  }

  async function handleRegistration(event) {
    event.preventDefault();
    navigate("/admin/dsm1");
  }

  return (
    <section className={style.contAdmin}>
      <div className={style.gridOneAdmin}>
        <Navbar />
        <h3 className={style.credentialAdmin}>Frequencia</h3>
      </div>
      <h2>Selecione a Turma</h2>
      <div className={style.gridAdmin}>
        <Button className={style.buttonAdmin} onClick={handleRegistration}>
          <img className={style.iconAdmin} src={matricula} alt="" />
          DSM1
        </Button>
        <Button className={style.buttonAdmin} onClick={handleHorario}>
          <img className={style.iconAdmin} src={matricula} alt="" />
          DSM2
        </Button>
      </div>
    </section>
  );
};

export default AdminFreq;
