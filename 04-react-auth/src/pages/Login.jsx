import { useContext } from 'react'
import '@/assets/css/form.css'
import logo from '@/assets/react.svg'
import useForm from '@/hooks/useForm'
import { loginUserService } from '@/services/userServices'
// import { loginUserService } from '@/services/fakeUserServices'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/context/AuthContext'

const Login = () => {
  const { loginUser } = useContext(AuthContext)
  // Redirigir programaticamente con un hook
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const result = await loginUserService(data)
      if (result.status === 200) {
        const token = result.data.token
        loginUser(token)
        navigate('/dashboard')
      }
    } catch (error) {
      console.log('Ocurrio un error en Login: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <div>
      <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit}>
          <img className='mb-4' src={logo} alt='' width='72' height='57' />
          <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='name@example.com'
              name='email'
              value={input.email}
              onChange={handleInputChange}
            />
            <label htmlFor='email'>Email address</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='Password'
              name='password'
              value={input.password}
              onChange={handleInputChange}
            />
            <label htmlFor='password'>Password</label>
          </div>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
          <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
        </form>
      </main>
    </div>
  )
}
export default Login
