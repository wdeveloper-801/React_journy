import React from 'react'

const Lifting_state_up_child = ({setTheme}) => {
    let changetheme = () => {
        setTheme("red")
    }
    return (
        <div>
            <button
                className="w-40 h-8 bg-blue-500 cursor-pointer active:scale-90 active:bg-green-600" onClick={changetheme} >   Change Theme
            </button>
        </div>
    )
}

export default Lifting_state_up_child 