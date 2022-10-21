import * as yup from 'yup'
import { email, age, password, confirmPassword } from './index'

const registerFormSchema = yup.object().shape({
  email,
  age,
  password,
  confirmPassword,
})

export default registerFormSchema
