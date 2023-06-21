export default function validateEmail(email) {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return isEmailValid.test(email);
}
