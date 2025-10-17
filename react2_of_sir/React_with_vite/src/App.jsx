// import { useState } from 'react'
// import './index.css'
// import First from './Compunennts/First'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//       <First name="karna" age="25" gender="male" />
//     </>
//   )
// }

// export default App
import React from 'react'
// import LoginMassages from './LoginMassages'
import StudentList from './StudentList'

function App() {
  return (
    <>
    {/* {console.log(StudentList)} */}
    {/* <LoginMassages islogin={true}/>
    <LoginMassages islogin={false}/> */
    }


    <StudentList />
   
    

    </>
  )
}

export default App