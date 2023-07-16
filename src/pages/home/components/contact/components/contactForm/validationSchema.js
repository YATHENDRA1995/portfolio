import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name can't be longer than 50 characters")
    .required("Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Phone number is not valid")
    .required("Phone number is required"),
  message: Yup.string()
    .min(20, "Message must be at least 20 characters")
    .required("Message is required"),
});