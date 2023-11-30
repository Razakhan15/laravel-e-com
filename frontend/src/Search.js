import React, { useState } from "react";
import Header from "./Header";

const Search = () => {
  const [data, setData] = useState([]);
  async function searchProducts(key) {
    let result = await fetch("http://localhost:8000/api/search/" + key);
    result = await result.json();
    setData(result);
  }
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <h1 className="uppercase text-3xl">search product</h1>
        <input
        className="mt-10 p-3 border "
          type="text"
          placeholder="Search"
          onChange={(e) => searchProducts(e.target.value)}
        />
        {data.map((item) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img
                className="rounded-t-lg w-96 h-48"
                src={"http://127.0.0.1:8000/" + item.file_path}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              <p className="mb-3 text-gray-700 dark:text-gray-400 font-bold">
                {item.price}
              </p>
             
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
