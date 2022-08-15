import * as yup from "yup";

export const createWorkSpaceSchema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  userId: yup.string().required("User ID id required"),
});
