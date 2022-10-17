import * as yup from 'yup'

const email = yup.string().email('Please enter a valid email').required('Required')

const age = yup
  .number()
  .transform((value) => (isNaN(value) ? undefined : value))
  .positive()
  .integer()
  .required('Required')

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
const password = yup
  .string()
  .min(5, 'Password should contain at least 6 characters')
  .matches(passwordRules, {
    message:
      'Password must contain at least one capital letter (A-Z), number (0-9) and special character (@,#,$...) ',
  })
  .required('Required')

const confirmPassword = yup
  .string()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
  .required('Required')

export { email, age, password, confirmPassword }
