import axios from "axios";
import { axiosInstance } from "../Utilities/axiosHelper";

import {
  getTokenCookie,
  getAuthHeader,
  removeTokenCookie,
} from "../Utilities/authTools.js";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const createWorkSpace = async (values) => {
  console.log(values);
  const result = await axiosInstance.post("/workspace/create", {
    name: values.name,
    userId: values.userId,
  });

  return result.data;
};

export const getAllWorkSpace = async (values) => {
  const result = await axiosInstance.post(
    "/workspace/getall",
    values,
    getAuthHeader()
  );
  return result.data;
};
