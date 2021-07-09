import validator from 'validator';
import { formDataType } from './Auth';

export default function validateForm(
  formData: formDataType,
  isSignup: boolean
) {
  let errors: any = {};

  //username
  const username = formData.username?.trim();

  if (!username) {
    errors.username = '*Username required';
  }
  if (username && !validator.isLength(username, { min: 5, max: 16 })) {
    errors.username = 'Username length must be between 5 and 16 characters';
  }

  //email
  if (isSignup) {
    const email = formData.email?.trim().toLowerCase();
    if (!email) {
      errors.email = '*Email required';
    } else if (!validator.isEmail(email)) {
      errors.email = 'Email is invalid';
    }

    //confirm password
    if (!formData.confirmPassword) {
      errors.confirmPassword = '*Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
  }

  //password
  if (!formData.password) {
    errors.password = '*Password is required';
  } else if (!validator.isStrongPassword(formData.password)) {
    errors.password = 'The password you provided is not strong enough!';
  }
  //No errors
  if (!Object.keys(errors).length) return null;

  return errors;
}
