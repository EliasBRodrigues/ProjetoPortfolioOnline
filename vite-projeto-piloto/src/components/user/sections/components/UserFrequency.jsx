import React, { useState } from "react";

import Navbar from "../../../service/Navbar";
import materia1 from "../../../../assets/presenca.svg";
import materia2 from "../../../../assets/aviso_presenca.svg";
import style from "../style/UserFrequencia.module.css";

const UserFrequency = () => {
    return (
      <section className={style.cont}>
      <div className={style.gridOne}>
        <Navbar />
        <h3 className={style.credential}>Frequencia</h3>
      </div>
      <div className={style.grid}>
        <img  src={materia1} alt="" />
        <img className={style.grade} src={materia2} alt="" />
      </div>
    </section>
    )
}

export default UserFrequency
