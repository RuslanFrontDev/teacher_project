import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
// styles
import "../assets/home.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="home">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Data Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              return (
                <tr key={item.id}>
                  <td data-column="First Name">{item.id}</td>
                  <td data-column="Title">{item.title.slice(0, 20)}...</td>
                  <td data-column="Description">
                    {item.description.slice(0, 15)}...
                  </td>
                  <td data-column="Price">{item.price}$</td>
                  <td data-column="Action">
                    <Link to={`/details/${item.id}`}>
                      <VisibilityIcon />
                    </Link>
                    <Link to={`/details-data/${item.id}`}>
                      <DeleteIcon className="delete" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
