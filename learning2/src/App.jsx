import { useState, useEffect } from 'react'
import './App.css'
import Card from './compands/Card'
import Card2 from './compands/Card2';
import Counter from './compands/Counter';
import Fornhanding_with_tow_way_data_bending from './compands/Fornhanding_with_tow_way_data_bending';
import Useeffect from './compands/Useeffect';
import Useref from './compands/useref';
import Useref2 from './compands/Useref2';
// import Useref from './compands/Useref';




function App() {
  useEffect(() => {
    alert('welcome to my page')
    console.log('welcome to my page')
  }, [])


  const users = [
    {
      user: 'kamran',
      age: 13,
      img: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=pexels-mikebirdy-112460.jpg&fm=jpg'
    },
    {
      user: 'sara',
      age: 14,
      img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      user: 'ahmed',
      age: 15,
      img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    {
      user: 'fatima',
      age: 12,
      img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    {
      user: 'ali',
      age: 13,
      img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
    },
    {
      user: 'noor',
      age: 16,
      img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
    },
    {
      user: 'usman',
      age: 14,
      img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    {
      user: 'ayesha',
      age: 13,
      img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      user: 'zain',
      age: 15,
      img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
    },
    {
      user: 'hiba',
      age: 12,
      img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
    },
    {
      user: 'ali',
      age: 13,
      img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
    },
    {
      user: 'noor',
      age: 16,
      img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
    },
  ];
  return (<>
    {/* 
    <Counter />
    <div className='flex flex-wrap justify-center'>
      {users.map((c, index) => {
        return (
          <Card key={index}
            age={c.age}
            name={c.user}
            img={c.img}

          />
        )
      })}
    </div>
    <Card2 />
  <Fornhanding_with_tow_way_data_bending /> */}

    <Useeffect />
    <Useref />
    <Useref2 />


  </>
  )
}


export default App
