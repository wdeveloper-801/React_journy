import React from 'react'

const Card = (props) => {
    return (
        <>
                <div className='w-70 h-50 bg-blue-400 m-4 flex justify-center items-center flex-col rounded-2xl text-3xl flex-wrap'>
                    <h2>{props.username}</h2>
                    <h2>{props.city}</h2>
                    <h2>{props.country}</h2>
                </div>

        </>
    )
}

export default Card