import React, { useRef } from 'react'

const App = () => {

  console.log('App rendeder')
  const nameRef = useRef()
  
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(nameRef.current.value)
  }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <form className='w-80 p-10 bg-gray-200 flex flex-col items-center justify-center gap-4' onSubmit={handleSubmit}>
        <input  className ='rounded bg-gray-300' type="text" placeholder='Enter name' ref={nameRef} />
        <input className='rounded bg-gray-300'   type="number" placeholder='Enter age' />
        <button className='bg-blue-500 text-white py-2 px-4 rounded' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App