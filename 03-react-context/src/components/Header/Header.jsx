import { useSongContext } from '@/context/SongContext'

const Header = () => {
  const context = useSongContext()
  const song = context.selectedSong

  const nextSong = () => {

  }

  const previousSong = () => {

  }

  return (
    song.title
      ? (
        <div>
          Now Playing... {song.title} - {song.artist}
          <input type='search' onChange={() => {}} />
          <button>Prev</button>
          <button>Next</button>
        </div>
        )
      : <div>Selecciona una cancion...</div>
  )
}

export default Header
