import { div } from "motion/react-client";
import React from "react";

function Counter99({ render }) {
    const [count, setCount] = React.useState(0);
    const up = () => setCount(count + 1);
    const down = () => setCount(count - 1);

    return render(count, up, down);
}

export default function Render_props_patten_theme() {
    return (
        <div className="flex items-center flex-col gap-4 justify-center h-screen">

            <Counter99
                render={(count, up, down) => (
                    <>
                        <p className="text-3xl">{count}</p>
                        <button className="w-20 h-12 bg-blue-500 cursor-pointer active:scale-90" onClick={up}>Clicked</button>
                        <button className="w-20 h-12 bg-orange-500 cursor-pointer active:scale-90" onClick={down}>Clicked</button>
                    </>
                )}
            />
        </div>
    );
}
