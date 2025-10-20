import React, { useState } from 'react'
import P2 from './P2 '

export const P1 = () => {
    const [theme, setTheme] = useState("purple")
    return (
        <>
            <div className="flex justify-center items-center flex-col mt-22 gap-4">
                <h1 className="capitalize">change theme in {theme} mode</h1>
                <P2 theme={theme} setTheme={setTheme} />
            <div  className={`w-40 h-12 bg-${theme}-500`}></div>
            </div>
        </>
    )
}
