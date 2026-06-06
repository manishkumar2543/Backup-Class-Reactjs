import React from 'react'

const Card = ({formData,handleDelete, setEdit, setDescription, setTitle}) => {
  return (
    <div>
      {formData.map((item, index) => (
        <div key={index} className='bg-white p-10 items-center m-2 shadow-md rounded'>
          <h3 className='text-lg font-bold'>{item.title}</h3>
          <p className='text-gray-600'>{item.description}</p>
          <button className='bg-red-500 hover:bg-red-700 mt-3 text-white font-bold py-2 px-4 rounded' onClick={() => handleDelete(index)}>Delete</button>
          <button className='bg-yellow-500 hover:bg-yellow-700 mt-3 text-white font-bold py-2 px-4 rounded' onClick={() => {
            setEdit(index);
            setTitle(item.title);
            setDescription(item.description);
          }}>Edit</button>
        </div>
      ))}
    </div>
  )
}

export default Card