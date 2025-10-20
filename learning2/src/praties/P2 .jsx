import React from 'react'

const P2 = (props) => {
    let changetheme = () => {
        props.setTheme("red")
    }
    return (
        <div>
            <button
                className="w-40 h-8 bg-blue-500 cursor-pointer active:scale-90 active:bg-green-600" onClick={changetheme} >   Change Theme
            </button>
        </div>
    )
}

export default P2 