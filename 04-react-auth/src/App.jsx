import { BrowserRouter } from 'react-router-dom'
import { Header } from '@/components/Header'
import RoutesIndex from '@/routes/Index'
import { AuthProvider } from '@/context/AuthContext'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <RoutesIndex />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
