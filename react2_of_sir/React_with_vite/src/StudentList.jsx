import React from 'react'

function StudentList() {
    const std = ["ali", "khan", "ahmed"];
    // console.log(std);

    return (
        <>


            {/* <ul>
                <h1 style={{color:"red"}}>hello</h1>
                {
                    std.map((student,index)=>{
                        return  <li key={index}>{student}</li>
                        // console.log(student);
                        

                    })
                }

            </ul> */}

            <ul>
                {std.map((student, index) => {
                    // console.log(student);
                    return <li key={index}>  {student}</li>
                })}
            </ul>
        </>
    )
}

export default StudentList