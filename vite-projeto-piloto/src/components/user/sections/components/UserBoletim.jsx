import React, { useState } from "react";

import { Button } from "primereact/button";
import Navbar from "../../../service/Navbar";
import { Sidebar } from "primereact/sidebar";
import materia1 from "../../../../assets/materias/1.svg";
import materia2 from "../../../../assets/materias/2.svg";
import materia3 from "../../../../assets/materias/3.svg";
import materia4 from "../../../../assets/materias/4.svg";
import materia5 from "../../../../assets/materias/5.svg";
import menu from "../../../../assets/menu.svg";
import style from "../style/UserBoletim.module.css";

const UserBoletim = () => {
    const [visible, setVisible] = useState(false);
  return (
    <section className={style.cont}>
    <div className={style.gridOne}>
      <Navbar />
      <h3 className={style.credential}>Boletim</h3>
    </div>
    <div className={style.grid}>
      <img className={style.grade} src={materia1} alt="" />
      <img className={style.grade} src={materia2} alt="" />
      <img className={style.grade} src={materia3} alt="" />
      <img className={style.grade} src={materia4} alt="" />
      <img className={style.grade} src={materia5} alt="" />
    </div>
  </section>
  )
}

export default UserBoletim
