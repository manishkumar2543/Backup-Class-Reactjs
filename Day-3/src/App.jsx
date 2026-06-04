import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [data, setData] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    const newData=[...data]
    newData.push({name, age})
    setData(newData)
    console.log(newData);
    setAge('')
    setName('')
  }

  return (
    <div className='min-h-screen bg-gray-200 flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='flex m-10 bg-gray-300 p-10 rounded-md flex-col gap-4 w-70 mx-auto mt-10'>
        <input value={name} onChange={(e) => setName(e.target.value)} className='border border-gray-400 p-2 rounded' type="text" placeholder='Enter name ...' />
        <input value={age} onChange={(e) => setAge(e.target.value)} className='border border-gray-400 p-2 rounded' type="number" placeholder='Enter age ...' />
        <button className='bg-blue-500 text-white px-4 py-2 rounded' type='submit'>Submit</button>
      </form>
        
      <div className='w-70 mx-auto mt-10'>
        {data.map((item, index) => (
          <div key={index} className='bg-white p-4 rounded mb-4'>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App