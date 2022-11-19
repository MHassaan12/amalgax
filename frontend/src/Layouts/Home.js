import React from "react";
import { GiBookStorm } from "react-icons/gi";
// import UserAction from "../../Components/UserAction";
import Footer from "../Components/Footer";
import money from "../assets/money1.svg";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logoCompany.png";

const Home = () => {
  const { auth, profile } = useSelector((state) => state.auth);
  // if (auth && profile.package.timestamps && profile.package.status) {
  //   return <Navigate to="/dashboard" />;
  // }
  return (
    <div className="gradient text-white">
      {/* Top bar */}
      <div className="mx-[6%] flex justify-between py-4">
        {/* Logo */}
        <div>
          <img
            src={logo}
            className="w-[130px] h-[50px] sm:w-[200px] sm:h-[50px]"
          />
          {/* <GiBookStorm className="text-3xl text-custom-secondary  md:text-5xl" /> */}
        </div>
        {/* Navbar */}
        <div className="ml-16">
          {/* <ul className="flex">
            <li>
              <a
                className="mr-2 border-b-2 border-custom-secondary p-1 text-sm font-normal md:mr-7 md:text-lg"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a className=" mr-2 p-1 text-sm md:mr-7 md:text-lg" href="/">
                Sell
              </a>
            </li>
            <li>
              <a className="mr-2 p-1 text-sm md:mr-7 md:text-lg" href="/">
                Help
              </a>
            </li>
          </ul> */}
        </div>
        {/* Speed Dial */}
        <div className="">
          <ul className="flex">
            <li>
              <Link
                className="mr-2  p-1 text-sm font-normal md:mr-7 md:text-lg"
                to="/register"
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                className=" mr-2 p-1 text-sm md:mr-7 md:text-lg"
                to="/login"
              >
                Sign in
              </Link>
            </li>
          </ul>
          {/* <UserAction /> */}
        </div>
      </div>
      {/* Hero Section */}
      <Outlet />
      <div className="border-t border-custom-grey  px-5 py-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
