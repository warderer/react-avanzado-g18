import { Routes, Route } from 'react-router-dom'
import { Home, Login, Secret, Signup, Dashboard } from '@/pages'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}
export default RoutesIndex
