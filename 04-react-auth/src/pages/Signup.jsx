import '@/assets/css/form.css'
import logo from '@/assets/react.svg'

const Signup = () => {
//   {
//     "first_name": "Danilo",
//     "last_name": "Parc",
//     "gender": "M",
//     "email": "danylo@gmail.com",
//     "password": "gatito123"
// }
  return (
    <div>
      <main className='form-signin w-100 m-auto'>
        <form>
          <img className='mb-4' src={logo} alt='' width='72' height='57' />
          <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='first_name'
              placeholder='Elias'
              name='first_name'
              value=''
              onChange={() => {}}
            />
            <label htmlFor='first_name'>First Name</label>
          </div>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='last_name'
              placeholder='Shuchleib'
              name='last_name'
              value=''
              onChange={() => {}}
            />
            <label htmlFor='last_name'>Last Name</label>
          </div>

          <div className='form-floating'>
            <select
              className='form-select'
              id='gender'
              name='gender'
              value=''
              onChange={() => {}}
            >
              <option value=''>Choose...</option>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
            <label htmlFor='gender'>Gender</label>
          </div>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='name@example.com'
              name='email'
              value=''
              onChange={() => {}}
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
              value=''
              onChange={() => {}}
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
export default Signup
