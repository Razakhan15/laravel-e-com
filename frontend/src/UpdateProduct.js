import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  let { id } = useParams();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  async function getProd() {
    let result = await fetch("http://localhost:8000/api/product/" + id);
    result = await result.json();
    setData(result);
    setName(result.name);
    setPrice(result.price);
    setDescription(result.description);
    setFile(result.file_path);
  }
  useEffect(() => {
    getProd();
  }, []);

  async function editProduct(id) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    let result = await fetch(
      "http://localhost:8000/api/updateproduct/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
      );
      nav("/");
  }

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center space-y-5 p-5">
        <div className="space-x-5">
          <label className="text-2xl font-bold">name:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="p-3 border border-gray-500"
            type="text"
            defaultValue={data.name}
          />
        </div>
        <div className="space-x-5">
          <label className="text-2xl font-bold">price:</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            className="p-3 border border-gray-500"
            type="number"
            defaultValue={data.price}
          />
        </div>

        <div className="space-x-5">
          <label className="text-2xl font-bold">description:</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            className="p-3 border border-gray-500"
            type="text"
            defaultValue={data.description}
          />
        </div>
        <div className="space-x-5">
          <label className="text-2xl font-bold">image:</label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            className="p-3 border border-gray-500"
            type="file"
          />
        </div>
        <div className="w-52">
          <img src={"http://127.0.0.1:8000/" + data.file_path} alt="" />
        </div>
        <button
          onClick={() => editProduct(data.id)}
          className="border p-3 border-gray-500"
        >
          Update
        </button>
      </div>
    </>
  );
};

export default UpdateProduct;
