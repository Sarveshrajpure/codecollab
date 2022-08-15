import { ADD_FILE_CONTENT } from "./types";

export const add_file_content = (fileContent) => ({
  type: ADD_FILE_CONTENT,
  payload: fileContent,
});
