import * as yup from "yup";

export const hotelSchema = yup.object().shape({
  Title: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .max(24, "Cannot exceed 24 characters")
    .required("Required"),
  Price: yup
    .number("Must be a number")
    .min(100, "Value must be at least 100")
    .max(99999, "Value cant exceed 99999 per night")
    .integer("Must be an integer")
    .required("Required"),
  Area: yup.string().required("Required"),
  WiFi: yup.boolean().required("Required"),
  Pets: yup.boolean().required("Required"),
  Parking: yup.boolean().required("Required"),
  Bathroom: yup.boolean().required("Required"),
  Roomservice: yup.boolean().required("Required"),
  Food: yup.boolean().required("Required"),
  Thumbnail: yup.mixed().required("Required"),
  Gallery: yup.mixed().required("Required"),
  Description: yup
    .string()
    .min(10, "Must be at least 10 characters")
    .max(1000, "Cannot exceed 1000 characters")
    .required("Required"),
});
