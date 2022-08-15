import { ADD_FILE_CONTENT } from "../Actions/types";
let userDefault = {
  user: {
    firstname: null,
    lastname: null,
    email: null,
    phone: null,
  },
  auth: null,
};
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_FILE_CONTENT:
      return {
        ...state,
        fileInfo: { ...action.payload },
      };

    default:
      return state;
  }
};

export default userReducer;
