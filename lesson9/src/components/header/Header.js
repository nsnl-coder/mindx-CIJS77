import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const Header = () => {
  const { i18n, t } = useTranslation(['common'])

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')?.length > 2) {
      i18next.changeLanguage('en')
    }
  }, [])

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='#'>
        {t('eatfresh')}
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto d-flex align-items-center'>
          <li className='nav-item active'>
            <Link to='/' className='nav-link'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item active'>
            <Link to='/profile' className='nav-link'>
              Profile <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <select
              className='nav-link border-0 ml-1 bg-dark text-white'
              value={localStorage.getItem('i18nextLng')}
              onChange={handleLanguageChange}
            >
              <option value='en'>English</option>
              <option value='fr'>French</option>
              <option value='vi'>Vietnamese</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
