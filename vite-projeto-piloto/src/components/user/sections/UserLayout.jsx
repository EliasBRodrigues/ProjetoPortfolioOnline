import "primeicons/primeicons.css";

import { Button } from "primereact/button";
import Navbar from "../../service/Navbar";
import React from "react";
import boletim from "../../../assets/boletim.svg";
import frequencia from "../../../assets/frequencia.svg";
import horario from "../../../assets/horario.svg";
import matricula from "../../../assets/matricula.svg";
import profile from "../../../assets/profile.svg";
import style from "../style/User.module.css";
import { useNavigate } from "react-router-dom";

const UserLayout = () => {
  const navigate = useNavigate();

  async function handleHorario(event) {
    event.preventDefault();
    navigate("/user/horario");
  }

  async function handleBoletim(event) {
    event.preventDefault();
    navigate("/user/boletim");
  }

  async function handleFrequency(event) {
    event.preventDefault();
    navigate("/user/frequencia");
  }

  async function handleRegistration(event) {
    event.preventDefault();
    navigate("/user/matricula");
  }

  return (
    <section className={style.cont}>
      <div className={style.gridOne}>
        <Navbar />
        <img src={profile} className={style.profile} alt="Image" />
        <h3 className={style.credential}>Fulano de Ciclano Beltrano</h3>
        <p className={style.credential}>fulano.ciclano@facul.sp.gov.br</p>
        <p className={style.credential}>RA: 1234567891234</p>
      </div>
      <div className={style.grid}>
        <Button className={style.button} onClick={handleRegistration}>
          <img className={style.icon} src={matricula} alt="" />
          Matricula
        </Button>
        <Button className={style.button} onClick={handleHorario}>
          <img className={style.icon} src={horario} alt="" />
          Horarios
        </Button>
        <Button className={style.button} onClick={handleBoletim}>
          <img className={style.icon} src={boletim} alt="" />
          Boletim
        </Button>
        <Button className={style.button} onClick={handleFrequency}>
          <img className={style.icon} src={frequencia} alt="" />
          Frequencia
        </Button>
      </div>
    </section>
  );
};

export default UserLayout;
