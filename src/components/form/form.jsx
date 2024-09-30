import React, { useState } from "react";

export default function Form({ setData }) {
  const [inputValue, setInputValue] = useState("");

  function addData(e) {
    e.preventDefault();
    console.log(inputValue);
    setData((pS) => {
      return [...pS, { name: inputValue, id: Date.now() }];
    });
    setInputValue(""); 
  }

  return (
    <form
      onSubmit={addData}
      className="border-2 border-gray-500 font-bold rounded-md"
    >
      <input
        onChange={(e) => setInputValue(e.target.value)} 
        type="text"
        name="userName"
        className="outline-none px-3 placeholder:text-gray-400"
        placeholder="Enter your Text"
        value={inputValue}        />
      <button type="submit" className="py-1 px-3 bg-green-500 text-white">
        Save
      </button>
    </form>
  );
}
