// src/components/TotalPartner.js
import React from "react";
import style from "./TotalPartner.module.scss";

function TotalPartner({data}) {
  return (
    <div className={style.total_partner}>
      <h3>Total Partner</h3>
      <p>{data?.count}</p>
    </div>
  );
}

export default TotalPartner;
