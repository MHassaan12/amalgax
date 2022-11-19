import React from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";
import CardStats from "../Components/CardStats.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import { RiRefund2Line } from "react-icons/ri";
import { IoIosWallet } from "react-icons/io";
import { FaMarsDouble } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Admin() {
  const { auth } = useSelector(state => state.auth);
  if(!auth){
    return <Navigate to="/" />
  }
  return (
    <>
      <Sidebar />
      <div className="relative bg-blueGray-100 md:ml-64">
        <AdminNavbar />
        {/* Header */}
        <Outlet />
      </div>
    </>
  );
}

export default Admin;
