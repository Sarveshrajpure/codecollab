import { io } from "socket.io-client";
// eslint-disable-next-line no-unused-vars
const L_URL = "http://localhost:3002";
const P_URL = process.env.REACT_APP_BACKEND_URL;

export const initSocket = async () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  return io(P_URL, options);
};
