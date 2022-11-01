import { useState } from 'react'

const useForm = (initialFormValue) => {
  const [values, setValues] = useState(initialFormValue)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
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
  }
}

export default useForm
