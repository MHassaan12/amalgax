/*eslint-disable*/
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import bg from "../assets/bg-white.png";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const { profile } = useSelector(state => state.auth);
  console.log('aaaaa', profile);
  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between bg-white py-4 px-6 shadow-xl md:fixed md:left-0 md:top-0 md:bottom-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-0 md:min-h-full md:flex-col md:flex-nowrap md:items-stretch">
          {/* Toggler */}
          <button
            className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase text-blueGray-600 md:block md:pb-2"
            to="/dashboard"
          >
            <img src={bg} alt="Not Found" className="lg:h-[80%]" />
          </Link>
          {/* User */}
          <ul className="flex list-none flex-wrap items-center md:hidden">
            <li className="relative inline-block">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "absolute top-0 left-0 right-0 z-40 h-auto flex-1 items-center overflow-y-auto overflow-x-hidden rounded shadow md:relative md:mt-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:shadow-none " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="mb-4 block border-b border-solid border-blueGray-200 pb-4 md:hidden md:min-w-full">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase text-blueGray-600 md:block md:pb-2"
                    to="/dashboard"
                  >
                    <img src={bg} alt="Not Found" className="h-auto w-[20%]" />
                  </Link>
                </div>
                <div className="flex w-6/12 justify-end">
                  <button
                    type="button"
                    className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            {/* <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="h-12 w-full rounded border border-solid  border-blueGray-500 bg-white px-3 py-2 text-base font-normal leading-snug text-blueGray-600 placeholder-blueGray-300 shadow-none outline-none focus:outline-none"
                />
              </div>
            </form> */}

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6> */}
            {/* Navigation */}

            <ul className="flex list-none flex-col md:min-w-full md:flex-col">
              <li className="items-center">
                <NavLink
                  className={({ isActive, isPending }) => {
                    return `text-xs uppercase py-3 font-bold block  ${isActive ? "text-lightBlue-500 hover:text-lightBlue-600" : isPending ? "text-blueGray-700 hover:text-blueGray-500" : ""}`;
                  }}
                  to="/dashboard"
                >
                  <i
                    className={({ isActive, isPending }) => {

                      return `fas fa-tv mr-2 text-sm  ${isActive ? "opacity-75" : isPending ? "text-blueGray-300" : ""}`;
                    }}
                  ></i>
                  Dashboard
                </NavLink>
              </li>
              {profile && profile?.role === 'user' &&
                <>
                  <li className="items-center">
                    <NavLink
                    className={({ isActive, isPending }) => {
                      return `text-xs uppercase py-3 font-bold block  ${isActive ? "text-lightBlue-500 hover:text-lightBlue-600" : isPending ? "text-blueGray-700 hover:text-blueGray-500" : ""}`;
                    }}
                      to="/dashboard/team"
                    >

                      <i
                        className={({ isActive, isPending }) => {
                          return `fa-solid fa-rectangle-history-circle-user mr-2 text-sm ${isActive ? "opacity-75" : isPending ? "text-blueGray-300" : ""}`;
                        }}
                      ></i>
                      Team Members
                    </NavLink>
                  </li>
                  <li className="items-center">
                    <NavLink
                    className={({ isActive, isPending }) => {
                      return `text-xs uppercase py-3 font-bold block  ${isActive ? "text-lightBlue-500 hover:text-lightBlue-600" : isPending ? "text-blueGray-700 hover:text-blueGray-500" : ""}`;
                    }}
                      to="/dashboard/history"
                    >

                      <i
                        className={({ isActive, isPending }) => {
                          return `fa-solid fa-rectangle-history-circle-user mr-2 text-sm ${isActive ? "opacity-75" : isPending ? "text-blueGray-300" : ""}`;
                        }}
                      ></i>
                      History
                    </NavLink>
                  </li>

                </>
              }
              {profile && profile?.role !== 'user' && (
                <>
                  <li className="items-center">
                    <NavLink
                      className={({ isActive, isPending }) => {
                        return `text-xs uppercase py-3 font-bold block  ${isActive ? "text-lightBlue-500 hover:text-lightBlue-600" : isPending ? "text-blueGray-700 hover:text-blueGray-500" : ""}`;
                      }}

                      to="/dashboard/users"
                    >

                      <i
                        className={({ isActive, isPending }) => {
                          return `fa-solid fa-users mr-2 text-sm ${isActive ? "opacity-75" : isPending ? "text-blueGray-300" : ""}`;
                        }}

                      ></i>
                      All Users
                    </NavLink>
                  </li>
                  <li className="items-center">
                    <NavLink
                      className={({ isActive, isPending }) => {
                        return `text-xs uppercase py-3 font-bold block  ${isActive ? "text-lightBlue-500 hover:text-lightBlue-600" : isPending ? "text-blueGray-700 hover:text-blueGray-500" : ""}`;
                      }}
                      to="/dashboard/depositUsers"
                    >
                      <i
                        className={({ isActive, isPending }) => {
                          return `fa-solid fa-money-from-bracket mr-2 text-sm ${isActive ? "opacity-75" : isPending ? "text-blueGray-300" : ""}`;
                        }}
                      ></i>
                      Deposit Users
                    </NavLink>
                  </li>
                  <li className="items-center">
                    <NavLink
                      className={({ isActive, isPending }) => {
                        return `text-xs uppercase py-3 font-bold block  ${isActive ? "text-lightBlue-500 hover:text-lightBlue-600" : isPending ? "text-blueGray-700 hover:text-blueGray-500" : ""}`;
                      }}
                      to="/dashboard/refundUsers"
                    >
                      <i
                        className={({ isActive, isPending }) => {
                          return `fa-solid fa-sack-dollar mr-2 text-sm ${isActive ? "opacity-75" : isPending ? "text-blueGray-300" : ""}`;
                        }}

                      ></i>
                      Refund Users
                    </NavLink>
                  </li>
                </>
              )}
              <li className="items-center">
                <NavLink
                  className={({ isActive, isPending }) => {
                    return `text-xs uppercase py-3 font-bold block  ${isActive ? "text-lightBlue-500 hover:text-lightBlue-600" : isPending ? "text-blueGray-700 hover:text-blueGray-500" : ""}`;
                  }}
                  to="/dashboard/profile"
                >
                  <i
                    className={({ isActive, isPending }) => {
                      return `fa-solid fa-sack-dollar mr-2 text-sm ${isActive ? "opacity-75" : isPending ? "text-blueGray-300" : ""}`;
                    }}

                  ></i>
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
