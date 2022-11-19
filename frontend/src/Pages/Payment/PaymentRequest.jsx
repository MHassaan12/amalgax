import React from "react";
import { GiBookStorm } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiOutlineFileDone } from "react-icons/ai";

const PaymentRequest = () => {
  return (
    <div className="gradient flex h-screen justify-center items-center">
      <div className="flex w-[70%] flex-col items-center justify-center bg-custom-footer p-5 sm:p-5 md:p-10 lg:p-20 text-center">
        <AiOutlineFileDone className="text-center text-3xl text-custom-secondary  md:text-7xl" />

        <div className="flex items-center">
          <span className=" sm:my-5 inline font-mono text-lg sm:text-2xl p-[30px] sm:px-[100px]">
            Your Payment Request Has Been Sent. Please click the link below to
            contact with the admin <a href="#">Support</a>
          </span>
        </div>
        <Link to="/">
          <p className="underline text-blue-400">
            Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PaymentRequest;
