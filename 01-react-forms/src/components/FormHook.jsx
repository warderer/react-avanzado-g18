import { useState, useEffect } from 'react'
import logo from '../assets/react.svg'
import useForm from '../hooks/useForm'

const FormHook = () => {
  // Paso 1: Crear un unico estado con toda la info en forma de objeto
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    edad: 0,
    genero: '',
    email: '',
    password: '',
    otroCampo: ''
  })

  // Paso 2: Voy a simular traer datos de un API y prerellenar el formulario
  useEffect(() => {
    setTimeout(() => {
      const info = {
        nombre: 'Francisco',
        apellido: 'Campos',
        edad: 28,
        genero: 'M',
        email: 'email@example.com',
        password: '1234'
      }
      setDatos(info)
    }, 5000)
  }, [])

  const sendData = (data) => {
    if (data.apellido !== '') {
      console.log('Send Data', data)
    }
  }

  // Paso 3: Uso de mi custom Hook de useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form onSubmit={handleSubmit}>
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' name='nombre' placeholder='Tu nombre' id='nombre' value={input.nombre} onChange={handleInputChange} />

          <label htmlFor='apellido'>Apellido</label>
          <input type='text' name='apellido' placeholder='Tu Apellido' id='apellido' value={input.apellido} onChange={handleInputChange} />

          <label htmlFor='otro'>Otro</label>
          <input type='text' name='otro' placeholder='Tu Otro' id='otro' value={input.otroCampo} onChange={handleInputChange} />

          <label htmlFor='edad'>Edad</label>
          <input type='number' name='edad' placeholder='Tu edad' id='edad' value={input.edad} onChange={handleInputChange} />

          <label htmlFor='genero'>Genero</label>
          <select name='genero' id='genero' value={input.genero} onChange={handleInputChange}>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@mail.com' id='email' value={input.email} onChange={handleInputChange} />

          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' value={input.password} onChange={handleInputChange} />
          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormHook
