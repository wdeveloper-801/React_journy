import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../compends/Use context/Useconext1'
import { Link } from 'react-router-dom';

const Addrespage = () => {
    const { billpage, Ordernum, setIsCartOpen } = useContext(CartContext);

    const [customer, setCustomer] = useState({
        name: "",
        address: "",
        phone: "",
    });


    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Customer info submitted:", customer);
        // You can send this to backend or save
    };

    useEffect(() => {
        // Reset cart count
        setIsCartOpen(false);  // Close sidebar
    }, []);

    return (
        <>
            <div className=" mt-17 bg-gray-100 min-h-screen flex justify-center items-center flex-col ">
                <h1 className="text-3xl font-bold mb-6 text-center">Customer Orders</h1>

                {/* Customer Info Form */}
                <form onSubmit={handleSubmit} className="bg-white w-4/5 p-5 " >
                    <div>

                        <div className="mb-4">
                            <input type="text" name="name" value={customer.name} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter name" />
                        </div>

                        <div className="mb-4">
                            <input type="text" name="address" value={customer.address} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter address" />
                        </div>

                        <div className="mb-4">
                            <input type="text" name="phone" value={customer.phone} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter phone" />
                        </div>

                        {/* Previous Orders */}
                        <div className="w-4/5">
                            <h2 className='text-2xl font-semibold mb-4'> Order Number #{Ordernum}</h2>
                            <div className="space-y-4 mb-2 ">
                                {Array.isArray(billpage) && billpage.length > 0 ? (
                                    billpage.map((a, i) => (
                                        <div key={a.id || i} className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
                                            <img src={a.img} alt={a.name} className="w-20 h-20 object-cover rounded-lg" />
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold">{a.name}</h3>
                                                <p className="text-gray-600">Price: {a.price}</p>
                                            </div>
                                        </div>
                                    ))) : (
                                    <p className="text-gray-500">No previous orders yet.</p>
                                )}

                            </div>
                        </div>
                    </div>
                    <Link to="/Order_confirm"><button type="submit" className="bg-blue-500 text-white  w-full h-10 rounded-lg hover:bg-blue-600 transition cursor-pointer active:scale-90 mt-2 " >  Submit </button></Link>
                </form>
            </div >
        </>
    )

}
export default Addrespage