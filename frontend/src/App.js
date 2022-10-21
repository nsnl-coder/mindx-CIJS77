import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import { LOGIN, REGISTER, NEW_POST, ALL_POSTS } from './constant/routes'
import Auth from './pages/auth/Auth'
import NewPost from './pages/newPost/NewPost'
import Header from './components/header/Header'
import AllPosts from './pages/allPosts/AllPosts'
import Table from './components/table/Table'

const App = () => (
  <div className=''>
    <Routes>
      <Route path='/' element={<AllPosts />} />
      <Route path={LOGIN} element={<Auth />} />
      <Route path={REGISTER} element={<Auth />} />
      <Route path={NEW_POST} element={<NewPost />} />
    </Routes>
    <Routes>
      <Route path={ALL_POSTS} element={<AllPosts />} />
    </Routes>
  </div>
)

export default App
