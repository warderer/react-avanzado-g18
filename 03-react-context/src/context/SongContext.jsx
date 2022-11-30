// Context tiene que ver con el manejo de estados globales en React
// Es decir, poder compartir la MISMA informacion entre diferentes niveles de componentes
// Context esta disponible a partir de la v16 de React
import { createContext, useState, useEffect, useContext } from 'react'
import canciones from '@/assets/listaCanciones.json'

// Para usar context, necesitamos seguir una serie de pasos

// 1 Creacion del contexto vacio
const SongContext = createContext()

// 2 Creacion del Componente Proveedor del contexto
// Es decir, maneja de donde se obtiene y como pasa la informacion

function SongProvider (props) {
  const [list, setList] = useState([])// Lista de canciones
  const [loading, setLoading] = useState(true)// Ya se cargo la info (Loader)
  const [selectedSong, setSelectedSong] = useState({}) // Info de la cancion selecionada
  const [search, setSearch] = useState('')
  // Simulo llamada a la API de la lista de canciones
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const value = {
    list,
    loading,
    selectedSong,
    setSelectedSong,
    search,
    setSearch
  }

  return (
    <SongContext.Provider value={value}>
      {props.children}
    </SongContext.Provider>
  )
}

// Consumidor  del contexto
// Brinda acceso a la data de los componentes

const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// 4 Exportar las funciones del Provider y el Consumer
// Para que puedan ser invocados en nuestros componentes
export {
  SongProvider,
  useSongContext
}

// Uso de context
// 5 ahora debemos de ir a componente superior (por ejemplo Home)
// y envolver a los componentes que necesitan la informacion del contexto
