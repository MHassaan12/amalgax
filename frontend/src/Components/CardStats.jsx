import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
  icon,
  buttonText,
  onClick
}) {
  
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words  rounded mb-6 xl:mb-0">
        <div className="flex-auto p-4 bg-white m-4 drop-shadow-lg shadow-lg shadow-white">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                {icon}
              </div>
            </div>
          </div>
          <p className="text-sm flex justify-between  text-blueGray-400 mt-4">
            <div>
              <span className={statPercentColor + " mr-2"}>
                <i
                  className={
                    statArrow === "up"
                      ? "fas fa-arrow-up"
                      : statArrow === "down"
                        ? "fas fa-arrow-down"
                        : ""
                  }
                ></i>{" "}
                {statPercent}%
              </span>
              <span className="whitespace-nowrap">{statDescripiron}</span>
            </div>
            <button
              className="cursor-pointer rounded-sm  bg-custom-secondary py-1 px-2 text-sm font-semibold text-black"
              onClick={onClick}
            >
              {buttonText}
            </button>
          </p>
        </div>
      </div>
      
    </>
  );
}



CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
