import { useTranslation } from 'react-i18next'

const Profile = () => {
  const { t } = useTranslation(['common', 'profile'])

  return (
    <div className='container mt-5 col-9 col-md-6'>
      <h1 className='text-center'>{t('common:profile')}</h1>
      <div className='form-group'>
        <label htmlFor=''>{t('profile:name')}</label>
        <input className='form-control' type='text' placeholder='John Doe' />
      </div>
      <div className='form-group'>
        <label htmlFor=''>{t('profile:age')}</label>
        <input className='form-control' type='text' placeholder='John Doe' />
      </div>
      <div className='form-group'>
        <label htmlFor=''>{t('profile:email')}</label>
        <input className='form-control' type='text' placeholder='John Doe' />
      </div>
      <div>
        <button className='btn btn-dark'>{t('common:submit')}</button>
      </div>
    </div>
  )
}

export default Profile
