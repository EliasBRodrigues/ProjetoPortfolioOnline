import React, { useState } from "react";

import { Button } from "primereact/button";
import Navbar from "../../../service/Navbar";
import { Sidebar } from "primereact/sidebar";
import grade from "../../../../assets/grade.svg";
import menu from "../../../../assets/menu.svg";
import quarta from "../../../../assets/semana/quarta.svg";
import quinta from "../../../../assets/semana/quinta.svg";
import sabado from "../../../../assets/semana/sabado.svg";
import segunda from "../../../../assets/semana/segunda.svg";
import sexta from "../../../../assets/semana/sexta.svg";
import style from "../style/UserComponents.module.css";
import terca from "../../../../assets/semana/terca.svg";

const UserHour = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className={style.cont}>
      <div className={style.gridOne}>
        <Navbar />
        <h3 className={style.credential}>Horarios</h3>
      </div>
      <img className={style.hora} src={grade} alt="" />
      <div className={style.grid}>
        <img className={style.grade} src={segunda} alt="" />
        <img className={style.grade} src={terca} alt="" />
        <img className={style.grade} src={quarta} alt="" />
        <img className={style.grade} src={quinta} alt="" />
        <img className={style.grade} src={sexta} alt="" />
        <img className={style.grade} src={sabado} alt="" />
      </div>
    </section>
  );
};

export default UserHour;
