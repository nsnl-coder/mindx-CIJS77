import * as yup from 'yup'
import { email, password } from './index'

const loginFormSchema = yup.object().shape({
  email,
  password,
})

export default loginFormSchema
