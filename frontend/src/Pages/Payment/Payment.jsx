import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaCopy } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import DropZone from "../../Components/DropZone";
import { useSelector } from "react-redux";
import { usePayoutMutation } from "../../store/api/authApi";

const Payment = () => {
  const [address] = useState("TH86VitQ8FL6oRtB1k6auQxDk6qbYDudxg");
  const [browseImage, setBrowseImage] = useState(null);
  const { profile } = useSelector(state => state.auth);
  const [payout, { data, isLoading, isError, error, isSuccess }] = usePayoutMutation();
  const { state } = useLocation();
  const navigate = useNavigate();
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles)
    acceptedFiles.map((file) => {
      setBrowseImage(file);
      
    });
  }, []);
  if (!state) {
    navigate('/packages');
    return;
  }
  const { level, ammount: price } = state;
  
  // const fileSelectedHandler = (event) => {
  //   console.log(event.target.files[0]);
  //   setBrowseImage(event.target.files[0]);
  // };

  console.log(data, isLoading, isError, error, isSuccess)

  if (isSuccess) {
    navigate('/payment/request');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile.package)
    const formData = new FormData();
    formData.append('package_name', level);
    formData.append('package_price', price);
    formData.append('image', browseImage);
    formData.append('package_id', profile.package._id);
    formData.append('address_id', address);
    payout(formData);
  }

  return (
    <div className="md:flex md:h-screen md:py-10 ">
      {/* Auth */}
      <div className="mx-[8%] bg-white text-black rounded-sm mt-2 flex-1  text-left md:mx-[28%]  md:mt-0 px-5 py-5 md:border md:px-10 md:shadow-2xl md:drop-shadow-md">
        <p className="my-2 text-center text-xl font-bold sm:my-4 sm:text-[25px] lg:text-2xl">
          Deposit
        </p>
        <div className="w-full">
          <span>
            Package Name
          </span>
          <span>
            {price}
          </span>
        </div>

        <form action="">
          <div className="mb-5">
            <label htmlFor="" className="sm:text-2xl">
              {
                <GrMapLocation className="mr-2 inline h-5 text-custom-secondary" />
              }
            </label>
            <input
              type="text"
              value={address}
              disabled={true}
              className="w-[80%] border-custom-main py-1 text-sm outline-none focus:border-0 focus:outline-none"
            />
            <FaCopy
              onClick={() => {
                navigator.clipboard.writeText(address);
              }}
              className="relative right-7 bottom-1 inline cursor-pointer text-custom-footer"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="sm:text-2xl">
              {
                <GiTakeMyMoney className="mr-2 inline h-5 text-custom-secondary" />
              }
            </label>
            <input
              type="text"
              value={price}
              disabled={true}
              className="w-[30%] border-b border-custom-main py-1 text-sm outline-none"
            />
          </div>

          <div className="mt-2">
            <label htmlFor="" className="mb-3 sm:text-xl">
              Please upload screenshot picture
            </label>
            <div className="mt-2 h-28 w-full border border-black">
              {!browseImage && <DropZone onDrop={onDrop} accept={"image/*"} />}
              {browseImage && (
                <img
                  className="h-auto w-full"
                  src={URL.createObjectURL(browseImage)}
                  alt="Upload image"
                />
              )}
            </div>
          </div>
          {/* <button className="mt-1 cursor-pointer rounded-sm border border-black bg-slate-400 px-1 text-sm">
            Upload
          </button> */}

          {/* <input
            accept="image/*"
            type="file"
            onChange={fileSelectedHandler}
            className="mt-1 cursor-pointer  px-1 text-sm"
          /> */}

          <button onClick={handleSubmit} className="bg-custom-secondary text-black mt-5 w-full cursor-pointer rounded-md py-2 font-semibold  sm:mt-10 md:mt-8 md:py-3">
            Payout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
