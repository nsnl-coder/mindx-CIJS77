import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import MobileContainer from './components/ui/mobileContainer/MobileContainer'
import NewTransaction from './pages/addTransactions/NewTransaction'
import AllTransactions from './pages/allTransactions/AllTransactions'
import Home from './pages/home/Home'
import Statistic from './pages/statistic/Statistic'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/statistic' element={<Statistic />} />
        <Route path='/add-new' element={<NewTransaction />} />
        <Route path='/all-transaction' element={<AllTransactions />} />
      </Routes>
    </LocalizationProvider>
  )
}

export default App
