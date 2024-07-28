import React, { useState } from "react";

import { Button } from "primereact/button";
import Navbar from "../../../../service/Navbar";
import grade from "../../../../../assets/date.svg";
import presenca from "../../../../../assets/presenca_text.svg";
import segunda from "../../../../../assets/chamada.svg";
import style from "../../style/UserComponents.module.css";

const AdminClass1 = () => {
  return (
    <section className={style.contAdmin}>
      <div className={style.gridOneAdmin}>
        <Navbar />
        <h3 className={style.credentialAdmin}>DSM 1</h3>
      </div>
      <img className={style.credentialPresenca} src={presenca} alt="" />
      <img className={style.horaAdmin} src={grade} alt="" />
      <div className={style.gridAdmin}>
        <img className={style.gradeAdmin} src={segunda} alt="" />
      </div>
      <Button className={style.buttonAdmin}>Salvar</Button>
    </section>
  )
}

export default AdminClass1
