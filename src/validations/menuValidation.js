import * as yup from "yup";

export const categorySchema = yup.object().shape({
  name: yup.string().min(4).max(255).required("Category name is required"),
  time: yup.string().max(10),
});

export const ItemSchema = yup.object().shape({
  name: yup.string().min(4).max(255).required("Item name is required"),
  description: yup.string().min(3).max(225),
  price: yup.string().max(20).required(),
  image: yup.string().nullable(true),
});
