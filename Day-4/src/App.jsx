import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('formData')) || [])



  useEffect(()=>{
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])




  function handleSubmit(e) {
    e.preventDefault()
   const newFormData=[...formData];
   newFormData.push({title, description})
   setFormData(newFormData)
   console.log(newFormData)
    setTitle('')
    setDescription('')
  }

  function handleDelete(index){
    const newFormData=[...formData];
    newFormData.splice(index, 1);
    
    setFormData(newFormData)

  }
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
       <form className='w-60 m-10 flex flex-col gap-4 bg-gray-200 p-10 rounded' onSubmit={handleSubmit}>
        <input value={title} className='border border-gray-300 rounded py-2 px-4' type="text"  placeholder='title' onChange={(e) => setTitle(e.target.value)}/>
        <input value={description} className='border border-gray-300 rounded py-2 px-4' type="text"  placeholder='description' onChange={(e) => setDescription(e.target.value)}/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Create</button>
       </form>
       <Card formData={formData} handleDelete={handleDelete} />
    </div>

  )

}

export default App