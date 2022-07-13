import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const tableNumberRegEx = /^[1-9][0-9]*$/;

export const guestRegisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be atleast 3 characters")
    .required("Name is Required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Enter valid Contact number")
    .required("Contact number is required"),
  email: yup
    .string()
    .email("Enter a valid Email")
    .required("Email is required"),
  table: yup
    .string()
    .matches(tableNumberRegEx, "Should be a number other than zero")
    .required("Table number is required"),
});
