import { axiosInstance } from "../Utilities/axiosHelper";

import {
  getTokenCookie,
  getAuthHeader,
  removeTokenCookie,
} from "../Utilities/authTools.js";

export const getRecentFiles = async (value) => {
  let files = await axiosInstance.post(
    "/document/getallbyuserId",
    value,
    getAuthHeader()
  );
  return files.data;
};

export const getFilesByWorkspaceId = async (value) => {
  let files = await axiosInstance.post(
    "/document/getallbyworkspaceid",
    value,
    getAuthHeader()
  );
  return files.data;
};
