import React, { use, useState } from 'react'
import Card from './components/Card'
const App = () => {
  const [count, setCount] = useState(0)

  const [postData, setPostData] = useState([
    {
      image:'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
      name: "John Doe",
      profession: "Software Engineer",
      likes: 0
    },
    {
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D",
      name: "Jane Smith",
      profession: "Graphic Designer",
      likes: 0
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D",
      name: "Michael Johnson",
      profession: "Web Developer",
      likes: 0
    },
  {
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D",
      name: "Emily Davis",
      profession: "Content Writer",
      likes: 0
  }
  ])



  // let count = 0
  // function increment() {
    
  //   count++
  //   console.log(count)
  // }
  // function decrement() {
  //   count--
  //   console.log(count)
  // }
  // function like(){
  //   setCount((prev)=>prev+1)
  //   setCount((prev)=>prev+2)
  // }
  // function dislike(){
  //   setCount((prev)=>prev-1)
  //   setCount((prev)=>prev-2)
  // }

    function like(index){
      const copyData = [...postData]
      copyData[index].likes += 1
      setPostData(copyData)
    }
    function dislike(index){
      const copyData = [...postData]
      copyData[index].likes -= 1
      setPostData(copyData)
    }
   
  return (
    // <div className='flex flex-col items-center justify-center h-screen gap-5'>
    //   <h1>{count}</h1>
    //   <button 
    //     onClick={like} className='bg-red-300 p-2'>Like</button>
    //   <button 
    //     onClick={dislike} className='bg-blue-300 p-2'>Dislike</button>
    // </div>
   
    <div className='flex flex-wrap p-2 gap-5'>
        {
          postData.map((item,index)=>{
            return (
              <Card like={like} dislike={dislike}  index={index} item={item} />
            )
          })
        }
    </div>  

  )
}

export default App