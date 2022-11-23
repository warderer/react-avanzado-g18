import { useRef, useEffect } from 'react'

const RefDom = () => {
  const inputRef = useRef()
  console.log(inputRef.current)

  useEffect(() => {
    inputRef.current.focus()
    inputRef.current.value = 'Hola mundo'
  }, [])

  return (
    <div>
      <input ref={inputRef} type='text' />
    </div>
  )
}
export default RefDom
