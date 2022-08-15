import * as yup from "yup";

const noWhiteSpacesRegex = /^\S*$/;

export const createWorkSpaceSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be atleast 3 characters or more")
    .max(100, "Must be 100 characters or less")
    .matches(noWhiteSpacesRegex, "Spaces not allowed")
    .required("Required"),
  //userId: yup.string().required("User ID id required"),
});
