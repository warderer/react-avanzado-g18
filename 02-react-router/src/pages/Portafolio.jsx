import { Link, Outlet } from 'react-router-dom'
/* <Outlet /> es un componente que sirve en ruteos anidados para
indicarle al Padre, donde debe renderearse el hijo */

const Portafolio = () => {
  return (
    <>
      <h1>Portafolio</h1>
      <Outlet />
      <nav>
        <ul>
          <li>
            <Link to='/portafolio/1'>Pinterest</Link>
          </li>
          <li>
            <Link to='/portafolio/2'>Cajero</Link>
          </li>
          <li>
            <Link to='/portafolio/3'>Pokédex</Link>
          </li>
        </ul>
      </nav>

    </>
  )
}
export default Portafolio
