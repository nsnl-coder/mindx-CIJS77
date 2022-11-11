import { Suspense } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
