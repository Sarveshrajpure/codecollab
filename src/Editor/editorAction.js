import axios from "axios";
import { axiosInstance } from "../Utilities/axiosHelper";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const CompileAndRun = async (values) => {
  console.log(values);
  const result = await axiosInstance.post("/compiler/compile", {
    language_id: values.LangId,
    source_code: values.code,
    customInput: values.input,
  });

  return result.data;
};
