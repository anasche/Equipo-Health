// src/components/RatingReview.js
import React from "react";
import style from "./ratingReview.module.scss";
import { FaAward, FaStar } from "react-icons/fa6";

function RatingReview({ data }) {
  return (
    <div className={style.ratingreview}>
      <div className="flex bg-white w-fit py-[6px] pl-2 pr-3 rounded-3xl items-center space-x-2 mb-2">
        <div className="bg-black p-2 rounded-full">
          <FaAward className="h-4 w-4 text-white" />
        </div>
        <span className="text-[16px] font-medium">Rating Review</span>
      </div>
      <div className="flex flex-1 flex-col justify-between ">
        <p className="text-[14px]">{data?.title}</p>
        <div className="flex items-center text-[48px] space-x-2">
          <FaStar className=" text-primary-tw" />
          <span className="font-semibold">{data?.count}</span>
        </div>
      </div>
    </div>
  );
}

export default RatingReview;
