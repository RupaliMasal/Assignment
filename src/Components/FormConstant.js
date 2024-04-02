import * as Yup from "yup";

export const Form_Fields = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const validationSchema = Yup.object().shape({
  fname: Yup.string()
    .min(3, "First name is too short")
    .max(10, "First name is too long")
    .required("This is required Field"),

  lname: Yup.string()
    .min(3, "Last name is too short")
    .max(10, "Last name is too long")
    .required("This is required Field"),

  email: Yup.string()
    .email("Please enter proper email address")
    .required("This is required Field"),

  password: Yup.string()
    .min(6, "Minimum password should be 6")
    .max(10, "Maximum password should be 10")
    .required("This is required Field"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password does not match")
    .required("This is required Field"),
});

export const validateName = (name) => {
  if (name.length > 0 && name[0] != name[0].toUpperCase())
    return "First letter should be capital";
  return undefined;
};

export const validatePassword = (password) => {
  // regex
  const checkUppercase = /[A-Z]/.test(password);
  if (!checkUppercase) return "Password should contain 1 upper case letter";

  const checkLowercase = /[a-z]/.test(password);
  if (!checkLowercase) return "Password should contain 1 lower case letter";

  const checkNumber = /[0-9]/.test(password);
  if (!checkNumber) return "Password should contain 1 lower case letter";

  const checkSpecialChar = /[@#$%&*]/.test(password);
  if (!checkSpecialChar) return "Password should contain special character";
};
