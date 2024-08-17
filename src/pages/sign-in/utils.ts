import * as yup from "yup";

const requiredString = yup.string().required("Field is required");
const requiredEmail = requiredString.email("Invalid email");

export const SignInSchema = yup.object({
  email: requiredEmail,
  password: requiredString,
});
