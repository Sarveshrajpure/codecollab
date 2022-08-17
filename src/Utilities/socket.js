import { io } from "socket.io-client";
const L_URL = "http://localhost:3002";
const P_URL = "https://offdutyninjas.site";

export const initSocket = async () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  return io(P_URL, options);
};
