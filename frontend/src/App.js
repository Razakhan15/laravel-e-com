import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import AddProduct from "./AddProduct";
import Register from "./Register";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";
import ProductList from "./ProductList";
import Search from "./Search";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Register/>} path="/register" />
          <Route element={<Login />} path="/login" />
          <Route element={<Protected Cmp={ProductList} />} path="/" />
          <Route element={<Protected Cmp={AddProduct} />} path="/add" />
          <Route element={<Protected Cmp={Search} />} path="/search" />
          <Route
            element={<Protected Cmp={UpdateProduct} />}
            path="/update/:id"
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
