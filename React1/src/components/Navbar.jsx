

export default function Navbar() {

    return (
        <>
            <nav className="w-full h-20 bg-emerald-500 flex justify-around items-center text-white">
                <h1 className="text-2xl font-bold">Name</h1>
                <div className="flex gap-6">
                    <a className="text-xl hover:underline" href="#">Home</a>
                    <a className="text-xl hover:underline" href="#">About</a>
                    <a className="text-xl hover:underline" href="#">Services</a>
                    <a className="text-xl hover:underline" href="#">Contact</a>
                </div>
            </nav>
        </>
    )
}
