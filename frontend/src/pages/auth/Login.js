import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import loginFormSchema from './../../validation/loginFormSchema'
import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'
import AuthWithGoogle from './AuthWithGoogle'
import Navigation from './Navigation'
import { useEffect } from 'react'

const Login = () => {
  //
  const form = useForm({ resolver: yupResolver(loginFormSchema), mode: 'onTouched' })

  const { register, handleSubmit, formState: { errors }} = form // prettier-ignore

  const onValidatedSubmit = (data) => {
    alert('fineeee')
  }

  // useEffect(() => {
  //   console.log(errors)
  // }, [errors])

  return (
    <form onSubmit={handleSubmit(onValidatedSubmit)} className='space-y-2'>
      <AuthWithGoogle />
      <Input register={register} errors={errors} placeholder='Email' name='email' />
      <Input
        register={register}
        errors={errors}
        placeholder='Password'
        name='password'
        type='password'
      />
      <div className='link text-end text-xs'>Forgot password?</div>
      <Button type='submit' text='Login' className='!mb-10 !mt-6 hover:bg-black/80' />
      <Navigation />
    </form>
  )
}

export default Login
