import React from 'react'
import { useParams } from 'react-router-dom'

const Courses_details = () => {
    let parma = useParams()
    console.log(parma);
    
    return (
        <div>
            <h1 className="text-4xl text-center font-bold underline mt-4 mb-12">{parma.id} Courses_details</h1>
        </div>
    )
}

export default Courses_details