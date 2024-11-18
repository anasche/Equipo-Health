// src/components/TotalPartner.js
import React from "react";
import style from "./totalPartner.module.scss";
import { MdPeopleAlt } from "react-icons/md";

function TotalPartner({ data }) {
  return (
    <div className={style.total_partner}>
      <div className="flex bg-black w-fit py-[6px] pl-2 pr-3 rounded-3xl items-center space-x-2 mb-2">
        <div className="bg-white p-2 rounded-full">
          <MdPeopleAlt className="h-4 w-4 text-black" />
        </div>
        <span className="text-[16px] font-medium">Total Partner</span>
      </div>
      <div className="flex-1 flex items-end justify-center">
        <span className="text-[20px] font-medium">
          <span className="text-[48px] font-semibold">
            {data?.count?.split(" ")?.[0]}{" "}
          </span>
          {data?.count?.split(" ")?.[1]}
        </span>
      </div>
    </div>
  );
}

export default TotalPartner;
