import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/registerValidation";
import { RegisterUser } from "../registerAction";
import { register_user } from "../../Actions/userActions";
import { useDispatch } from "react-redux";
import Nav from "../../Home/components/Nav";
import spinner from "../../assests/spinner.gif";
import Footer from "../../Home/components/Footer";

import "./RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerError, setRegisterError] = useState();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      if (data) {
        setLoader(true);
        let response = await RegisterUser(data);
        if (response) {
          dispatch(register_user(response));
          setLoader(false);
          navigate("/login");
        }
      }
    } catch (err) {
      setLoader(false);
      if (err.response) {
        setRegisterError(err.response.data.message);
      } else {
        setRegisterError(err.message);
      }
    }
  };
  return (
    <React.Fragment>
      <Nav />
      <div className="registerFormWrapper  py-2">
        <div className="registerFormBlock w-full lg:max-w-lg md:max-w-lg max-w-xs">
          <form
            className="registerForm  rounded px-14 pt-5 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="pb-6 text-center text-2xl font-extrabold">
              <div>Hi, there!</div>
              <div>
                Let's create{" "}
                <span className="text-orange-600">your digital menu.</span>
              </div>
            </div>
            <div className=" lg:flex lg:space-x-4">
              <div className="mb-4 ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  className=" appearance-none border 
          rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none
           focus:shadow-outline"
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  {...register("firstname")}
                />{" "}
                {
                  <div
                    className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                    style={errors.firstname ? { display: "block" } : {}}
                  >
                    {errors.firstname?.message}
                  </div>
                }
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none border 
          rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none
           focus:shadow-outline"
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  {...register("lastname")}
                />{" "}
                {
                  <div
                    className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                    style={errors.lastname ? { display: "block" } : {}}
                  >
                    {errors.lastname?.message}
                  </div>
                }
              </div>
            </div>
           
            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Contact number
              </label>
              <input
                className="appearance-none border 
          rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none
           focus:shadow-outline"
                id="phone"
                name="phone"
                type="text"
                placeholder="Contact number"
                {...register("phone")}
              />{" "}
              {
                <div
                  className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                  style={errors.phone ? { display: "block" } : {}}
                >
                  {errors.phone?.message}
                </div>
              }
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border 
          rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none
           focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                {...register("email")}
              />{" "}
              {
                <div
                  className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                  style={errors.email ? { display: "block" } : {}}
                >
                  {errors.email?.message}
                </div>
              }
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border 
          rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none
           focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                {...register("password")}
              />{" "}
              {
                <div
                  className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                  style={errors.password ? { display: "block" } : {}}
                >
                  {errors.password?.message}
                </div>
              }
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmpassword"
              >
                Confirm Password
              </label>
              <input
                className="appearance-none border 
          rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none
           focus:shadow-outline"
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                placeholder="Confirm Password"
                {...register("confirmpassword")}
              />
              {
                <div
                  className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                  style={errors.confirmpassword ? { display: "block" } : {}}
                >
                  {errors.confirmpassword?.message}
                </div>
              }
            </div>
            <div
              className="invalid-feedback text-center text-red-500 text-xs px-2 py-2  pt-1 "
              style={registerError ? { display: "block" } : {}}
            >
              {registerError ? registerError : null}
            </div>

            {loader ? (
              <div className="flex justify-center">
                <img className="w-16" src={spinner} alt="spinner" />
              </div>
            ) : (
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="registerBtn  shadow-md mt-2  
         text-lg   md:text-xl md:mt-4  lg:text-xl"
                >
                  Register
                </button>
              </div>
            )}

            <div className="goToLoginLinkBlock text-center   mt-4 text-xs lg:text-sm md:text-sm ">
              <div>Already registered? </div>
              <div
                className="goToLoginLink px-1"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default RegisterForm;
