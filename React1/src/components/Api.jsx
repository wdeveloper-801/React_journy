
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { data } from 'autoprefixer';

const Api = () => {


    const [dataapi, setDataapi] = useState([])
    let getdata = async () => {
        console.log("get data");
        let api = await axios.get("https://picsum.photos/v2/list")
        let data = api.data
        setDataapi(data)
        console.log(data);
     

    }

    // Use_effect use  for auto run  function when page load//

    // useEffect(() => {
    //   getdata()
    // }, [])


    return (
        <>
            <div>
                <button onClick={getdata} className="w-32 h-10 bg-blue-500 text-white m-4 rounded-2xl border-2 border-white cursor-pointer  transition-all duration-300 active:scale-50">Get Data</button>
                {dataapi.map((ele, idx) => {
                    return <div key={idx} className="w-3xl bg-gray-400 text-black flex items-center p-4 mt-4 h-40 rounded-2xl ">
                        <img src={ele.download_url} alt="" className="w-1/3 h-full rounded-2xl" />
                        <h1 className="m-4" >{ele.id}</h1>
                        <h1 >{ele.author}</h1>
                    </div>
                })
                }
            </div>
        </>
    )
}
export default Api