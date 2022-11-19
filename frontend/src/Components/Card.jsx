import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div class="m-10 justify-between h-[500px] mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8">
      <div>
        <h3 class="mb-4 text-2xl font-semibold">{props.level}</h3>
        {/* <p class="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
        {props.title}
      </p> */}
        <div class="my-8 flex items-baseline justify-center">
          <span class="mr-2 text-5xl font-extrabold">${props.ammount}</span>
        </div>

        <ul role="list" class="mb-8 space-y-4 text-left">
          {props.level !== "Starter" && (
            <li class="flex items-center space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>3% Monthly Return on Investment (36% Yearly)</span>
            </li>
          )}
          <li class="flex items-center space-x-3">
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Become Company Business Developer</span>
          </li>
          <li class="flex items-center space-x-3">
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Earn Referral Commission</span>
          </li>
          <li class="flex items-center space-x-3">
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Rank up Revenue</span>
          </li>
          {props.level !== "Starter" && (
            <li class="flex items-center space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Refund (Any Time)</span>
            </li>
          )}
          <li class="flex items-center space-x-3">
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Withdraw within Seconds</span>
          </li>
        </ul>
      </div>
      <button
        onClick={() => navigate("/signin", { state: props })}
        class="bg-custom-secondary text-black justify-self-end   rounded-lg px-5 py-2.5 text-center text-sm font-medium    dark:text-white"
      >
        Get started
      </button>
    </div>
  );
};

export default Card;
