import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import MobileContainer from './components/ui/mobileContainer/MobileContainer'
import NewTransaction from './pages/addTransactions/NewTransaction'
import AllTransactions from './pages/allTransactions/AllTransactions'
import Home from './pages/home/Home'

const App = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {/* <MobileContainer>
        <Home />
      </MobileContainer> */}
        {/* <MobileContainer isHeaderContainerBg={false} heading='All transactions'>
        <AllTransactions />
      </MobileContainer> */}
        <NewTransaction />
      </LocalizationProvider>
    </>
  )
}

export default App
