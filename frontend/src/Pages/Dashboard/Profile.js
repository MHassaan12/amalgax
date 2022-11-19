import React from "react";
import myAvatar from "../../assets/myAvatar.png";
// import FieldFormProfile from "./FieldFormProfile";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { Formik, Field } from "formik";
import { InputText } from "../../Components/InputText";
import logo from "../../assets/logoCompany.png";
import { useSelector } from "react-redux";

export default function Profile() {
  const { profile } = useSelector(state => state.auth);
  return (
    <>
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={profile.image}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        onError={event => {
                          event.target.src = myAvatar
                          event.onerror = null
                        }}

                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 mt-32 sm:mt-0">
                      {profile.package.level === 'BD' &&<span className="text-md font-bold block uppercase tracking-wide text-blueGray-600">
                        Business Developer (BD)
                      </span>}
                      {profile.package.level === 'AFO' && <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        Assistent Financial Officer
                      </span>}
                      {profile.package.level === 'DFO' && <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        Deputy Financial Officer
                      </span>}
                      {profile.package.level === 'ADFO' && <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        Additional Financial Officer
                      </span>}
                      {profile.package.level === 'CFO' && <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                       Chief Financial Officer
                      </span>}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {profile.package.direct_members.length}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Direct referrals
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {profile.package.indirect_members.length}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Indirect referrals
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {`${profile.first_name.toUpperCase()} ${profile.last_name.toUpperCase() }`}
                  </h3>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  {/* <FieldFormProfile /> */}
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                      <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
                        <button
                          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Settings
                        </button>
                      </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <form>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                          User Information
                        </h6>
                        <div className="flex flex-wrap">
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Username
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="lucky.jesse"
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Email address
                              </label>
                              <input
                                type="email"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="jesse@example.com"
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                First Name
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="Lucky"
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Last Name
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="Jesse"
                              />
                            </div>
                          </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                          Contact Information
                        </h6>
                        <div className="flex flex-wrap">
                          <div className="w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Address
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                City
                              </label>
                              <input
                                type="email"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="New York"
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Country
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="United States"
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Postal Code
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="Postal Code"
                              />
                            </div>
                          </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                          About Me
                        </h6>
                        <div className="flex flex-wrap">
                          <div className="w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                About me
                              </label>
                              <textarea
                                type="text"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                                rows="4"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Profile
                    </h1>
                    <Formik

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
                      onSubmit={''}
                    >
                      {({ handleSubmit, errors, isValid, touched }) => (
                        <form class="space-y-4 md:space-y-6">
                          <div className="md:flex">
                            <div className="md:flex-1 md:px-2">
                              
                              <div className="mb-2">
                                <label
                                  for="first_name"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  First Name
                                </label>
                                <Field
                                  component={InputText}
                                  type="text"
                                  name="first_name"
                                  id="first_name"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

                              
                              <div className="mb-2">
                                <label
                                  for="phone_number"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Phone Number
                                </label>
                                <Field
                                  component={InputText}
                                  type="number"
                                  name="phone_number"
                                  id="phone_number"
                                  placeholder="+ (61) 3484 832033"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                           
                              <div className="mb-2">
                                <label
                                  for="last_name"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Last Name
                                </label>
                                <Field
                                  component={InputText}
                                  type="text"
                                  name="last_name"
                                  id="last_name"
                                  placeholder="Last Name"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                {errors.last_name && touched.last_name && (
                                  <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                      {errors.last_name}
                                    </span>
                                  </p>
                                )}
                              </div>

                              
                              <div className="mb-2">
                                <label
                                  for="email"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Your email
                                </label>
                                <Field
                                  component={InputText}
                                  type="email"
                                  name="email"
                                  id="email"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="name@company.com"
                                />
                                {errors.email && touched.email && (
                                  <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                    <span class="font-medium">{errors.email}</span>
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

                          <div class="flex items-start"></div>
                          <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={!isValid}
                            class="w-full text-white bg-custom-main hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                          >
                            {isValid}
                            submit
                          </button>
                        </form>
                      )}
                    </Formik>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
