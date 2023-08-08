import cookie from "react-cookies";

export const getTokenCookie = () => localStorage.getItem("x-access-token");
export const removeTokenCookie = async () => {
  let response = localStorage.removeItem("x-access-token");
  return response;
};
export const getAuthHeader = () => {
  return { headers: { Authorization: `${getTokenCookie()}` } };
};
