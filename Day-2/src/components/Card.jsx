import React from 'react'

const Card = ({item,like,dislike,index}) => {
    console.log()
  return (
    
           <div className='flex w-100 items-center p-5  flex-col gap-2 bg-sky-300 rounded-lg'>
           <img className='w-20 h-20 object-cover rounded-full' src={item.image} alt="" />
          <h1>{item.name}</h1>
          <p>{item.profession}</p>
           <h4 className='font-bold'>like : {item.likes}</h4>
         <div className='flex gap-5'>
          <button onClick={() => like(index)}
          className='bg-red-300 py-1 px-4'>Like</button>
          <button onClick={() => item.likes > 0 && dislike(index)}
          className='bg-blue-300 py-1 px-4'>Dislike</button>
         </div>
        </div>
  )
}

export default Card