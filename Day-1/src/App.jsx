import React from 'react'
import Card from './components/Card'

const App = () => {

  const person = [
    {
    name: 'jon snow',
    description: 'he is the king of the north',
    image: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'
    
    },
    {
    name: 'daenerys targaryen',
    description: 'she is the mother of dragons',
    image: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'
    }
  ]


  return (
    <div className='app'>
       {person.map((item,index) => {
        return <Card key={index} data={item}/>
       })}
    </div>
  )
}

export default App