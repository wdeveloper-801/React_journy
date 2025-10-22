import React, { use, useEffect, useState } from 'react'

const Github = () => {


    const [first, setfirst] = useState([])
    const [Two, setTwo] = useState([])
    let api = async () => {
        let api1 = await fetch("https://api.github.com/users/hiteshchoudhary")
        let api2 = await api1.json()
        let final = (api2.followers)
        let final2pic = (api2.avatar_url)
        setfirst(final)
        setTwo(final2pic)
    }

    useEffect(() => {
        api()
    }, [])
    return (
        <div className='flex justify-between items-center m-4 bg-gray-600 text-3xl text-white p-4'>
            <img src={Two} alt="" width={200} style={{ borderRadius: 100 }} />
          <h2 className='mr-10'>  Github followers: {first}</h2>
        </div>
    )
}

export default Github