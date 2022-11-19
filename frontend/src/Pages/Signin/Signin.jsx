import React, { useEffect, useState } from "react";
import "./Signin.css";
// import signin from "../../assets/signup.svg";
import { GrUserManager } from "react-icons/gr";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useGetProfileQuery, useSigninMutation } from "../../store/api/authApi";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { InputText } from "../../Components/InputText";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  me,
  setDirectMembers,
  setIndirectMembers,
  setProfile,
  setUser,
  signin,
} from "../../store/state/authSlice";
import logo from "../../assets/logoCompany.png";


const Signin = () => {
  const { profile, loading, auth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      // .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });

  useEffect(() => {
    console.log(auth);
    if (auth && profile) {
      if (profile.package.status) {
        navigate('/dashboard')
        console.log('qqq',auth);
      }
      if (!profile.package.status && !profile.package.timestamps) {
        navigate('/packages')
        console.log('ww',auth);
      }
      if (!profile.package.status && profile.package.timestamps) {
        navigate('/payment/request')
        console.log('ttt',auth);
      }

      // dispatch(me())
      //   .then((data) => {
      //   console.log('dddd',data);
      // }).catch((err) => {
      //   console.log('rrrr',err);
      // })
    }
  }, [auth])


  // if (!loading && profile) {
  //   if (profile.package.status) {
  //     navigate
  //   }
  // }

  const submit = async (values) => {
    const data = await dispatch(signin(values))
    if (data.meta.requestStatus === "fulfilled") {
      dispatch(me());
    }

  }
  return (
    <div className="bg-image md:flex md:h-screen">
      {/* Image */}
      {/* <img src={bgImg } /> */}
      {/* <div className="gradient md:hidden flex items-center flex-1 py-2 shadow-lg">
        <img
          src={signin}
          alt="Not Found"
          className=" mx-auto h-48 md:h-[400px] xl:h-[500px] w-full "
        />
      </div> */}
      {/* Auth */}

      <section class="flex-1 h-[800px] bg-gray-500/90 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img class="w-[200px] h-[100px]" src={logo} alt="logo" />
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h6 className="text-blueGray-500 text-sm font-bold">
                Sign in to your account
              </h6>
              {/* <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in with
              </h1> */}
              <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: "", password: "" }}
                onSubmit={submit}
              >
                {({ handleSubmit, errors, isValid, touched }) => (
                  <form class="space-y-4 md:space-y-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                       Your Email
                      </label>
                      <Field
                        component={InputText}
                        type="email"
                        name="email"
                        id="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="name@company.com"
                      />
                      {errors.email && touched.email && (
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                          <span class="font-medium">{errors.email}</span>
                        </p>
                      )}
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <Field
                        component={InputText}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                      {errors.password && touched.password && (
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                          <span class="font-medium">{errors.password}</span>
                        </p>
                      )}
                    </div>
                   
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                          Remember me
                        </span>
                      </label>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        onClick={handleSubmit}
                        disabled={!isValid || loading}
                        className="bg-custom-main text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        Sign In
                      </button>
                    </div>
                    {/* <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={!isValid || loading}
                      class="w-full text-white bg-custom-main hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign in
                    </button> */}
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Don’t have an account yet? {""}
                      <Link
                        to="/register"
                        class="font-large underline text-secondry-600 hover:underline dark:text-primary-500"
                      >
                        Sign up
                      </Link>
                    </span>
                   
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
