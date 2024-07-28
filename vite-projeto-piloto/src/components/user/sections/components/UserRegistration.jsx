import React, { useState } from "react";

import { Button } from "primereact/button";
import Navbar from "../../../service/Navbar";
import { Sidebar } from "primereact/sidebar";
import materia1 from "../../../../assets/presenca.svg";
import materia2 from "../../../../assets/aviso_presenca.svg";
import menu from "../../../../assets/menu.svg";
import style from "../style/UserFrequencia.module.css";

const UserRegistration = () => {
  const [visible, setVisible] = useState(false);
    return (
      <section className={style.cont}>
      <div className={style.gridOne}>
        <Navbar />
        <h3 className={style.credential}>Matricula</h3>
      </div>
      <div className={style.grid}>
        {/* <img  src={materia1} alt="" />
        <img className={style.grade} src={materia2} alt="" /> */}
      </div>
    </section>
    )
}

export default UserRegistration
