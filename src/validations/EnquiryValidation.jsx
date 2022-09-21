import * as yup from "yup";

export const enquirySchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .max(24, "Cannot exceed 24 characters")
    .required("Required"),
  email: yup.string().email("Wrong email format detected").required("Required"),
  details: yup
    .string()
    .min(10, "Must be at least 10 characters")
    .max(200, "Cannot exceed 200 characters")
    .required("Required"),
  adults: yup
    .number("Must be a number")
    .min(1, "At least one adult for booking a room")
    .max(10, "Can't book more than 10 adults at a time")
    .integer("Must be an integer")
    .required("Required"),
  children: yup
    .number("Must be a number")
    .max(10, "Can't book more than 10 children at a time")
    .integer("Must be an integer")
    .required("Required"),
  room: yup
    .number("Must be a number")
    .min(1, "Must book at least one room")
    .max(10, "Can't book more than 10 rooms at a time")
    .integer("Must be an integer")
    .required("Required"),
  from: yup
    .string()
    .matches(
      /^([1-9]|0[1-9]|[12][0-9]|3[0-1])\/([1-9]|0[1-9]|1[0-2])\/\d{4}$/,
      "Must be valid and formatted: dd/mm/yyyy"
    )
    .required("Required"),
  to: yup
    .string()
    .matches(
      /^([1-9]|0[1-9]|[12][0-9]|3[0-1])\/([1-9]|0[1-9]|1[0-2])\/\d{4}$/,
      "Must be valid and formatted: dd/mm/yyyy"
    )
    .required("Required"),
});
