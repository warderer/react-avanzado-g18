import { useParams, useNavigate } from 'react-router-dom'
// useParams me permite recuperar rutas dinamicas :pid
// useNavigate me permite cambiar la ruta de forma programatica, es decir
// usarla en alguna función de Js

const PortafolioDetalle = () => {
  const proyectos = [
    { id: 1, nombre: 'Pinterest', desc: 'Un clon de pinterest con HTML y CSS' },
    { id: 2, nombre: 'Cajero', desc: 'Simulador de cajero autómatico con HTML, CSS y JS' },
    { id: 3, nombre: 'Pokédex', desc: 'Consumir la PokéAPI y mostrar un listado de Pokémons con HTML, CSS, y JS ' }
  ]

  const { pid } = useParams() // Tiene el valor que yo le mando en ruta
  const navigate = useNavigate() // Para cambiar de ruta programaticamente

  return (
    <>
      <h3>ID: {proyectos[pid - 1].id}</h3>
      <h3>Nombre: {proyectos[pid - 1].nombre}</h3>
      <p>Descripción: {proyectos[pid - 1].desc}</p>

      <button onClick={() => {
        navigate('/portafolio')
        // Si quiero ir a la página anterior del historial: navigate(-1)
        // Si quiero ir a la página siguiente del historial: navigate(1)
      }}
      >Nos vamos al Portafolio
      </button>
    </>
  )
}
export default PortafolioDetalle
