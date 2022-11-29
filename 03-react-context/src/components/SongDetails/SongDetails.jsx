import './songdetails.css'
import { useSongContext } from '@/context/SongContext'

const SongDetails = () => {
  const context = useSongContext()
  return (
    <>
      {
        context.selectedSong.title
          ? <div>
            <img src={`https://picsum.photos/seed/${context.selectedSong.id}/400/400`} alt='Portada de; Disco' />
            <h1>{context.selectedSong.title}</h1>
            <h4>{context.selectedSong.artist}</h4>
            <h6>{context.selectedSong.year}</h6>
            {/* eslint-disable-next-line react/jsx-closing-tag-location */}
          </div>
          : <h1>Selecciona una cancion</h1>
      }
    </>
  )
}

export default SongDetails
