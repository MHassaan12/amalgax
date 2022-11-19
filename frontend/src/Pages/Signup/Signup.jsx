import React from "react";
import "./Signup.css";
// import signup from "../../assets/signup.svg";
import { GrUserManager } from "react-icons/gr";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSignupMutation } from "../../store/api/authApi";
import { setUser, signup } from "../../store/state/authSlice";
import * as yup from "yup";
import { Formik, Field } from "formik";
import { InputText } from "../../Components/InputText";
import logo from "../../assets/logoCompany.png";
import { useSelector } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, auth } = useSelector(state => state.auth);
  // const [signup, { data, isLoading, error, isError, isSuccess }] =
  //   useSignupMutation();
  // if (isSuccess) {
  //   dispatch(setUser(data));
  //   navigate("/signin");
  // }
  // if (isError) {
  //   console.log(error);
  //   // toast.error(error.message);
  // }
  const validationSchema = yup.object({
    first_name: yup
      .string("Enter your first name")
      .required("first name is required"),
    last_name: yup
      .string("Enter your last name")
      .required("last name is required"),
    user_name: yup
      .string("Enter your username")
      .required("username is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      // .min(6, 'Password should be of minimum 8 characters length')
      .required("Password is required"),
    confirm_password: yup
      .string("Enter confirm password")
      .label("confirm password")
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    phone_number: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    referrer: yup.string("Enter your height").optional(),
    // .min(6, 'Password should be of minimum 8 characters length')
  });

  const submit = async (values) => {
    const data = await dispatch(signup(values));
    if (data.meta.requestStatus === "fulfilled") {
      navigate('/login');
    }
    // (values) => signup(values)
  }

  return (
    <div className="bg-image md:flex">
      {/* Image */}
      {/* <div className="gradient md:hidden  md:justify-center flex flex-1 items-center py-2 shadow-lg">
        <img
          src={signup}
          alt="Not Found"
          className="borde mx-auto h-48 w-full md:h-[400px] xl:h-[500px] "
        />
      </div> */}
      {/* Auth */}
      <section class="flex-1 lg:h-[800px] bg-gray-500/90 dark:bg-gray-900 pb-6">
        <div class="flex flex-col items-center justify-center md:mt-[10px] px-6 py-8 mx-auto lg:py-0">
          <a
            href="/"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img class="w-[200px] h-[100px]" src={logo} alt="logo" />
          </a>
          <div class="w-full xl:lg:w-[56%] lg:w-[56%] md:w-full sm:w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h6 className="text-blueGray-500 text-xl font-bold">
                Create and account
              </h6>
              {/* <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1> */}
              <Formik
                validationSchema={validationSchema}
                initialValues={{
                  first_name: "",
                  last_name: "",
                  user_name: "",
                  email: "",
                  password: "",
                  confirm_password: "",
                  phone_number: "",
                  referrer: "",
                }}
                onSubmit={submit}
              >
                {({ handleSubmit, errors, isValid, touched }) => (
                  <form class="space-y-4 md:space-y-6">
                    <div className="md:flex">
                      <div className="md:flex-1 md:px-2">
                        {/* First Name */}
                        <div className="mb-2">
                          <label
                            for="first_name"
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          >
                            First Name
                          </label>
                          <Field
                            component={InputText}
                            type="text"
                            name="first_name"
                            id="first_name"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="First Name"
                          />
                          {errors.first_name && touched.first_name && (
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                              <span class="font-medium">
                                {errors.first_name}
                              </span>
                            </p>
                          )}
                        </div>

                        {/* Username */}
                        <div className="mb-2">
                          <label
                            for="user_name"
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          >
                            Username
                          </label>
                          <Field
                            component={InputText}
                            type="text"
                            name="user_name"
                            id="user_name"
                            placeholder="username"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                          {errors.user_name && touched.user_name && (
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                              <span class="font-medium">
                                {errors.user_name}
                              </span>
                            </p>
                          )}
                        </div>

                        {/* Password */}
                        <div className="mb-2">
                          <label
                            for="password"
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
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

                        {/* Phone Number */}
                        <div className="mb-2">
                          <label
                            for="phone_number"
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          >
                            Phone Number
                          </label>
                          <Field
                            component={InputText}
                            type="number"
                            name="phone_number"
                            id="phone_number"
                            placeholder="+ (61) 3484 832033"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                          {errors.phone_number && touched.phone_number && (
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                              <span class="font-medium">
                                {errors.phone_number}
                              </span>
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="md:flex-1 md:px-2">
                        {/* Last Name */}
                        <div className="mb-2">
                          <label
                            for="last_name"
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          >
                            Last Name
                          </label>
                          <Field
                            component={InputText}
                            type="text"
                            name="last_name"
                            id="last_name"
                            placeholder="Last Name"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                          {errors.last_name && touched.last_name && (
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                              <span class="font-medium">
                                {errors.last_name}
                              </span>
                            </p>
                          )}
                        </div>

                        {/* Your Email */}
                        <div className="mb-2">
                          <label
                            for="email"
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          >
                            Your email
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

                        {/* Confirm Password */}
                        <div className="mb-2">
                          <label
                            for="confirm_password"
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          >
                            Confirm password
                          </label>
                          <Field
                            component={InputText}
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="••••••••"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                          {errors.confirm_password && touched.confirm_password && (
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                              <span class="font-medium">
                                {errors.confirm_password}
                              </span>
                            </p>
                          )}
                        </div>

                        {/* Refereed Number */}
                        <div className="mb-2">
                          <label
                            for="referrer"
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          >
                            Refereed Number
                          </label>
                          <Field
                            component={InputText}
                            type="text"
                            name="referrer"
                            id="referrer"
                            placeholder="Refer Number"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                          {errors.referrer && touched.referrer && (
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                              <span class="font-medium">{errors.referrer}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                          I agree with the{" "}
                          <a
                            href="#pablo"
                            className="text-lightBlue-500"
                            onClick={(e) => e.preventDefault()}
                          >
                            Privacy Policy
                          </a>
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
                        Create an Account
                      </button>
                    </div>
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        class="font-large underline text-secondry-600 hover:underline dark:text-primary-500"
                      >
                        Sign in here
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

export default Signup;
