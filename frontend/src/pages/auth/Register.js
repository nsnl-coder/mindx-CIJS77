import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'

import Input from '../../components/shared/Input'
import registerFormSchema from './../../validation/registerFormSchema'
import { LOGIN } from '../../constant/routes'
import Button from '../../components/shared/Button'
import AuthWithGoogle from './AuthWithGoogle'
import Navigation from './Navigation'

const Register = () => {
  //
  const form = useForm({ resolver: yupResolver(registerFormSchema), mode: 'onTouched' })

  const { register, handleSubmit, formState: { errors }} = form // prettier-ignore

  const onValidatedSubmit = (data) => {
    alert('fineeee')
  }

  return (
    <form onSubmit={handleSubmit(onValidatedSubmit)}>
      <AuthWithGoogle text='Sign up with Google' />
      <Input register={register} errors={errors} placeholder='Email' name='email' />
      <Input register={register} errors={errors} placeholder='Age' name='age' type='number' />
      <Input
        register={register}
        errors={errors}
        placeholder='Password'
        name='password'
        type='password'
      />
      <Input
        register={register}
        errors={errors}
        placeholder='Confirm Password'
        name='confirmPassword'
        type='password'
      />
      <Button type='submit' text='Create New Account' className='!mb-10 !mt-6 hover:bg-black/80' />
      <Navigation url={LOGIN} text1='Had an account?' text2='Sign In' />
    </form>
  )
}

export default Register
