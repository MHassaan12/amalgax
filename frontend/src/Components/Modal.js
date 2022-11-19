import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { refund } from "../store/state/authSlice";

export default function Modal({ open, setOpen }) {
  const { profile } = useSelector(state => state.auth);
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const handlePayout = (e) => {
    e.preventDefault();
    setAddress('')
    dispatch(refund({ address_id: address, package_id: profile.package, amount: profile.package.price, }));
    setOpen(false)
    // setSkip((prev) => !prev);
    // setUserId(id);
  }

  return (
    <>
      {open ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
           
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl block uppercase text-blueGray-600 font-bold">Refund</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="mb-4 text-blueGray-500 text-lg leading-relaxed">
                    <span className="text-red-600 uppercase text-md font-bold">Warning!</span><br/>
                    <span className="text-sm">Refund Within 6 Months of Investment : 10% Deduction</span><br />
                    <span className="text-sm">Refund After 6 Months but Before 1 Year: 5% Deduction</span><br/>
                    <span className="text-sm">Refund After 1 Year: 0% Deduction</span><br />
                  </p>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e)=>setAddress(e.target.value)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Address"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      value={profile.package?.price? profile.package.price: 0}
                      readOnly={true}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Amount"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handlePayout}
                  >
                    Refund
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
