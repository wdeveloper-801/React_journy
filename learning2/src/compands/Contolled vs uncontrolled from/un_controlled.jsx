import React, { useRef } from 'react';

const UnControlled = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("name:",name);
    console.log("email:", email);
    console.log("password:", password);
    
  };
let handlePasswordChange = (e) => {
    console.log("live password show: ",e.target.value);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-blue-500 w-1/2 flex items-center justify-center flex-col rounded-2xl gap-4 pb-10 h-auto">
        <h1 className="text-2xl font-bold">Uncontrolled Component</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            className="border-2 border-black mt-3"
            ref={nameRef}

          />
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            className="border-2 border-black mt-3"
            ref={passwordRef}
            onChange={handlePasswordChange} 
          />
          <input
            id="email"
            type="text"
            placeholder="Enter Email"
            className="border-2 border-black mt-3"
            ref={emailRef}
          />
          <button
            type="submit"
            className="bg-green-500 w-50 h-12 cursor-pointer mt-4 active:scale-90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UnControlled;
