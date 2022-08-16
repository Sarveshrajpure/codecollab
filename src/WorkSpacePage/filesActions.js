import { axiosInstance } from "../Utilities/axiosHelper";

import {
  getTokenCookie,
  getAuthHeader,
  removeTokenCookie,
} from "../Utilities/authTools.js";

export const getOneFile = async (value) => {
  let file = await axiosInstance.post(
    "/document/getone",
    value,
    getAuthHeader()
  );

  return file.data;
};

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

export const saveFile = async (value) => {
  let file = await axiosInstance.post(
    "/document/create",
    value,
    getAuthHeader()
  );
  return file.data;
};

export const renameFile = async (value) => {
  let response = await axiosInstance.put(
    "/document/updatedocname",
    value,
    getAuthHeader()
  );
  return response.data;
};

export const deleteFile = async (value) => {
  console.log(value);
  let response = await axiosInstance.post(
    "/document/delete",
    value,
    getAuthHeader()
  );
  return response.data;
};
