import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    displayData();
  }, []);
  async function deleteOp(id) {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    displayData();
  }
  async function displayData() {
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
  }
  return (
    <>
      <Header />
      <div className="p-10 flex flex-row justify-center items-center flex-wrap">
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
                <button
                  onClick={() => deleteOp(item.id)}
                  className="bg-red-800 text-white p-4 font-bold rounded-lg"
                >
                  delete
                </button>
                <Link to={'/update/'+item.id}>
                  <button className="bg-green-800 ml-5 text-white p-4 font-bold rounded-lg">
                    update
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductList;
