import * as yup from "yup";

const requiredText = "This field is required";
const requiredMinText = "This field must have at least 2 letters";
const requiredMax10Text = "This field must have max 10 letters";
const requiredMaxText = "This field must have max 20 letters";

const requiredTextForm = "Please fill the fields";

// patterns for email and password fields

// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
// asdfghQ1
const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const validationPassword =
  "Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number";

// work example --> ddd@gmail.com
const emailFormat =
  /^[a-zA-Z0-9_.+]+(?<!^[0-9])@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const validationEmail = "Wrong email";

export const FormSchema = yup
  .object({
    firstName: yup
      .string()
      .min(2, requiredMinText)
      .max(10, requiredMax10Text)
      .required(requiredText),
    secondName: yup
      .string()
      .min(2, requiredMinText)
      .max(20, requiredMaxText)
      .required(requiredText),
    email: yup
      .string()
      .matches(emailFormat, validationEmail)
      .required(requiredText),
    password: yup
      .string()
      .matches(passwordFormat, validationPassword)
      .required(requiredText),
  })
  .required(requiredTextForm);
