import * as yup from "yup";

export const editFoodItemSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name should atleast 3 characters")
    .max(100, "Name should be of 100 characters maximum")
    .required("Name is required"),
  description: yup
    .string()
    .max(225, "Maximum 225 caharacters allowed!")
    .nullable(true),
  foodItemId: yup.string().required("Food item id required"),
  price: yup.string().max(20).required("Price required"),
  image: yup.string().nullable(true),
});
