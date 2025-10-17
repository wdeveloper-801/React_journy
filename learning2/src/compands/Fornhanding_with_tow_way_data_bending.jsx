import React, { useState } from 'react'

const Fornhanding_with_tow_way_data_bending = () => {
  
  const [titel, setTitel] = useState("")
  let submitHnadler = (e) => {
    e.preventDefault()
    console.log("form submit by" ,titel)
    setTitel("")
  }
  return (
    <>
      <form action="#" onSubmit={(e) => { submitHnadler(e) }}
        className="flex flex-col gap-4 items-center">
        <input type="text" value={titel} className='w-32 h-10 text-black border-2 border-white bg-green-400 mt-16' onChange={(e) => {
          setTitel(e.target.value)
          console.log(e.target.value);
        }} />
        <button className='w-16 h-8 bg-blue-500'>submit</button>
      </form>

    </>
  )
}

export default Fornhanding_with_tow_way_data_bending