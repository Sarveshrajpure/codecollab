import * as yup from "yup";
const uuidRegex =
  /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;

export const joinRoomSchema = yup.object().shape({
  roomId: yup.string().required("Room id required"),
  userName: yup.string().required("User name required"),
});
