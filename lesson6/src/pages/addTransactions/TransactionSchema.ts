import * as yup from 'yup'

const schema = yup
  .object({
    note: yup.string().required('Required'),
    amount: yup
      .string()
      .matches(/^[1-9][0-9]*$/, 'Please enter valid amount')
      .required('Required'),
    date: yup.string().required(),
  })
  .required()

export default schema
