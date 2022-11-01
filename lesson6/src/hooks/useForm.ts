import { useState } from 'react'

const useForm = (initialFormValue, validateForm) => {
  const [values, setValues] = useState(initialFormValue)
  const [errors, setErrors] = useState<any>({})

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    validateForm()
    setValues((prevValue: any) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }

  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
  }
}

export default useForm
