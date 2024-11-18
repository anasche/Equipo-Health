import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowCircleRight, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="md:m-[32px] md:rounded-[30px] overflow-hidden">
      <div className="md:flex flex-col w-full bg-gradient-to-r from-[#19191C] to-[#232329] text-white h-[1150px] hidden">
        <div className="w-full flex flex-col justify-center items-center h-2/5 text-center">
          <h2 className="text-head2 max-w-[900px] ">
            Gain Excellence with the Best POS Solutions
          </h2>
          <p className=" max-w-[550px] text-[18px] text-[#C2C2C2] py-3">
            Provide an unforgettable customer experience with fast ordering,
            convenient payments, and better service.
          </p>
          <div className="rounded-full overflow-hidden bg-primary-tw">
            <Button
              size="lg"
              style={{ backgroundColor: "inherit", border: "none" }}
            >
              <span className="flex items-center">
                Try Now
                <span className="ml-2">
                  <FaArrowCircleRight height={5} width={5} />
                </span>
              </span>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/footer/laptop.png" alt="scene" />
        </div>
      </div>
      <div className="bg-black text-white px-3 md:px-[108px] pt-[80px] pb-4 md:pb-[60px] space-y-20 divide-y-[1px] divide-[#2D2D30] ">
        <div className="flex flex-col md:flex-row text-center">
          <div className="flex-1">
            <h3 className="md:text-[48px]">
              Don't Miss This Exclusive Opportunity
            </h3>
            <p className="text-[#C2C2C2] text-[20px] md:pr-[130px] mb-0">
              Enter your email address and start connecting with a better
              business world using our POS products.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-end pt-5 md:pt-20">
            <div className="relative w-full md:w-9/12">
              <input
                placeholder="Enter your email"
                className="border-none outline-none bg-[#232329] h-[66px] w-full rounded-full px-4"
              />
              <button className="absolute  bg-primary-tw h-4/5 right-[10px] px-4 top-[10%] rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="pt-[60px]">
          <div className="flex flex-col md:flex-row justify-between w-full md:items-center mb-[32px]">
            <figure>
              <img src="/footer/logo.svg" alt="Company Logo" />
            </figure>
            <ul className="h-full flex flex-col md:flex-row *:px-2 md:items-center mb-0 pl-0">
              <li>Features</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Resource</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <span className="text-[16px] font-extralight mb-3 md:mb-0">
              © 2023 Coca, Inc. All rights reserved.
            </span>
            <div className="flex *:h-7 *:w-7 space-x-3">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
