import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .max(24, "Cannot exceed 24 characters")
    .required("Required"),
  email: yup.string().email("Wrong email format detected").required("Required"),
  subject: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .max(24, "Cannot exceed 24 characters")
    .required("Required"),
  category: yup.string().required("Required"),
  message: yup
    .string()
    .min(10, "Must be at least 10 characters")
    .max(500, "Cannot exceed 500 characters")
    .required("Required"),
});
