import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import { LOGIN, REGISTER, NEW_POST, ALL_POSTS } from './constant/routes'
import Auth from './pages/auth/Auth'
import NewPost from './pages/newPost/NewPost'
import Header from './components/header/Header'
import AllPost from './pages/allPosts/AllPost'
import Table from './components/table/Table'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={LOGIN} element={<Auth />} />
        <Route path={REGISTER} element={<Auth />} />
        <Route path={NEW_POST} element={<NewPost />} />
        {/* <Route path={ALL_POSTS} element={} /> */}
      </Routes>
      <Table />
    </>
  )
}

export default App
