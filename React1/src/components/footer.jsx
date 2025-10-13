import React from "react";

const Footer = (props) => {
  console.log(props.a); 
  return (
    <div className="w-full h-10 " >
      <h1 className="text-4xl font-bold  bg-green-900 text-zinc-50 text-center mb-5" >username is {props.a}</h1>
    </div>
  )
};

export default Footer; // default export
    