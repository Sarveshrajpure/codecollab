import axios from "axios";
import { axiosInstance } from "../Utilities/axiosHelper";

import {
  getTokenCookie,
  getAuthHeader,
  removeTokenCookie,
} from "../Utilities/authTools.js";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const createWorkSpace = async (values) => {

  const result = await axiosInstance.post(
    "/workspace/create",
    values,
    getAuthHeader()
  );

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
