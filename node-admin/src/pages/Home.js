import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home-container">
      <div className="head">
        <h1>Home -Products List</h1>
        <Link to="/create">Create new</Link>
      </div>

      <table className="table">
        <tr>
          <th>Product Img</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Featured</th>
          <th>Actions</th>
        </tr>

        {products?.map((product) => (
          <tr key={product.id}>
            <td>
              <img
                className="product-img"
                src={` http://localhost:5000/${product.productImage}`}
                alt={product.name}
              />
            </td>
            <td>
              <Link to={`/products/${product.id}`}> {product.name} </Link>
            </td>
            <td>{product.price}</td>
            <td>{String(product.featured)}</td>
            <td>
              <Link to={`/edit/${product.id}`}>Edit</Link>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Home;
