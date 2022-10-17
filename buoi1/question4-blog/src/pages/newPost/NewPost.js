import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'
import Container from '../../components/shared/Container'
import Page from '../../components/shared/Page'
import TextArea from '../../components/shared/TextArea'
import newPostFormSchema from '../../validation/newPostFormSchema'
import Label from '../../components/shared/Label'

const NewPost = () => {
  //
  const form = useForm({ resolver: yupResolver(newPostFormSchema), mode: 'onTouched' })

  const { register, handleSubmit, formState: { errors }} = form // prettier-ignore

  const onValidatedSubmit = (data) => {
    alert('fineeee')
  }

  return (
    <Page title='Create New Post' className='flex min-h-screen items-center justify-center'>
      <Container className=' w-full max-w-2xl border py-16 px-12'>
        <form onSubmit={handleSubmit(onValidatedSubmit)} className='space-y-4'>
          <Input register={register} errors={errors} name='postTitle' label='Title' />
          <TextArea register={register} errors={errors} label='Text content' name='postBody' />
          <Button
            type='submit'
            text='Create New Post'
            className='!mb-10 !mt-6 bg-blue-500 hover:bg-blue-600'
          />
        </form>
        <div className='space-x-1'>
          <Label text='Who can see your post?' />
          <select name='' id='' className='outline-0'>
            <option value='private'>Only you</option>
            <option value='public'>Everyone</option>
          </select>
        </div>
      </Container>
    </Page>
  )
}

export default NewPost
