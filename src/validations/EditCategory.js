import * as yup from "yup";

export const editCategorySchema = yup.object().shape({
  _id: yup.string().required("Category id required"),
  name: yup
    .string()
    .required("Name is required")
    .max(100, "Name should be of 100 characters maximum"),
  time: yup.string().max(10, "Maximum 10 caharacters allowed!"),
});
