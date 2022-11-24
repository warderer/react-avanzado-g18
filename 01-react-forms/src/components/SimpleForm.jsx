import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  // Paso 1: Crear los estados donde guardaremos la info tecleada
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Paso 2: Crear el formulario base en JSX
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form>

          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@mail.com' id='email' />

          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' />
        </form>
      </div>
    </div>
  )
}

export default SimpleForm
