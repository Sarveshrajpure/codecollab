import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../loginAction";
import { login_user } from "../../Actions/userActions";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/loginValidations";
import spinner from "../../assests/spinner.gif";
import Nav from "../../Home/components/Nav";
import Footer from "../../Home/components/Footer";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [loginError, setLoginError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      if (data) {
        setLoader(true);
        let response = await LoginUser(data);
        if (response) {
          dispatch(login_user(response));
          setLoader(false);
          navigate("/dashboard/dashboardhome");
        }
      }
    } catch (err) {
      setLoader(false);
      if (err.response) {
        setLoginError(err.response.data.message);
      } else {
        setLoginError(err.message);
      }
    }
  };
  return (
    <React.Fragment>
      <Nav />
      <div className="loginFormWrapper">
        <div className="loginFormBlock w-full lg:max-w-lg md:max-w-lg max-w-xs">
          <form
            className="loginForm  px-10 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="LoginTitle text-center  font-extrabold pb-6">
              <span className="text-orange-600">Dashboard</span> Login
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className=" appearance-none border 
            rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none
             focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                {...register("email")}
              />
              {
                <div
                  className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                  style={errors.email ? { display: "block" } : {}}
                >
                  {errors.email?.message}
                </div>
              }
            </div>

            <div className="mb-10">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className=" appearance-none border 
            rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none
             focus:shadow-outline"
                id="password"
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
            <div
              className="invalid-feedback text-center text-red-500 text-xs px-2 py-2 pt-1 "
              style={loginError ? { display: "block" } : {}}
            >
              {loginError ? loginError : null}
            </div>

            {loader ? (
              <div className="flex justify-center mt-1">
                <img className="w-12" src={spinner} alt="spinner" />
              </div>
            ) : (
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="loginBtn   shadow-md mt-2  
           text-lg   md:text-xl md:mt-4  lg:text-xl"
                >
                  Login
                </button>
              </div>
            )}
          </form>
          <div className="redirectToRegister  text-center mt-4 text-xs lg:text-sm md:text-sm">
            Don't have a account?
            <span
              className="goToRegisterLink"
              onClick={() => {
                navigate("/register");
              }}
            >
              {" "}
              Register
            </span>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            &copy;2021 MOD MENUS Corp. All rights reserved.
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default LoginForm;
