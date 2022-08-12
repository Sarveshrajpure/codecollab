import axios from "axios";
import { axiosInstance } from "../Utilities/axiosHelper";

import {
  getTokenCookie,
  getAuthHeader,
  removeTokenCookie,
} from "../Utilities/authTools.js";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const LoginUser = async (values) => {
  const loginInfo = await axiosInstance.post("/auth/signin", {
    email: values.email,
    password: values.password,
  });

  return loginInfo.data;
};

export const userIsAuth = async () => {
  console.log("in user auth");
  if (!getTokenCookie()) {
    return false;
  } else {
    const user = await axiosInstance.get("/auth/isauth", getAuthHeader());
    console.log("user exists");

    return user;
  }
};

export const userSignOut = async () => {
  console.log("in delete cookie");
  await removeTokenCookie();
  return true;
};
