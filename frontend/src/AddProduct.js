import React, { useState } from "react";
import Header from "./Header";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  async function addProduct() {
    const formData = new FormData();
    formData.append('file', file)
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    let result = await fetch("http://localhost:8000/api/add",{
      method: 'POST',
      body: formData
    })
  }
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center space-y-5 mt-5">
        <input
          onChange={(e) => setName(e.target.value)}
          className="border p-4 w-1/2"
          placeholder="name"
          type="text"
          name="name"
          id=""
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          className="border p-4 w-1/2"
          placeholder="price"
          type="number"
          name="price"
          id=""
        />
        <input
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-4 w-1/2"
          placeholder="image"
          type="file"
          name="file"
          id=""
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          className="border p-4 w-1/2"
          placeholder="description"
          type="text"
          name="description"
          id=""
        />
        <button className="border p-4 text-white bg-gray-800" onClick={addProduct}>Add Product</button>
      </div>
    </>
  );
};

export default AddProduct;
