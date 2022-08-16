import axios from "axios";
import { axiosInstance } from "../Utilities/axiosHelper";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const RegisterUser = async (values) => {
  const registerInfo = await axiosInstance.post("/auth/register", {
    email: values.email,
    password: values.password,
    firstname: values.firstname,
    lastname: values.lastname,
    businessname: values.businessname,
    phone: values.phone,
  });

  return registerInfo.data;
};
