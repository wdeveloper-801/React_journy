
import React, { useState } from 'react'
import Lifting_state_up_child from './lifting state up child'


const Lifting_state_up_parent = () => {
    const [theme, setTheme] = useState("purple")
    return (
        <div className="flex justify-center items-center flex-col mt-22 gap-4">
            <h1 className="capitalize">change theme in {theme} mode</h1>
            <Lifting_state_up_child theme={theme} setTheme={setTheme} />
            <div className={`w-40 h-12 bg-${theme}-500`}></div>
        </div>
    )
}

export default Lifting_state_up_parent