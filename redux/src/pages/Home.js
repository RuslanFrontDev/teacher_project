import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/card.action";
import ProductCard from "../components/ProductCard";
import "../styled/home.css";

const Home = () => {

  const [products] = useState([
    {
      id: 1,
      productName: "Shoes",
      price: 400,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      imageUrl:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80",
    },
    {
      id: 2,
      productName: "Jacket",
      price: 100,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      imageUrl:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      productName: "Jeans",
      price: 200,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      imageUrl:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      productName: "Beanie",
      price: 50,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      imageUrl:
        "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    },
  ]);
  const dispatch = useDispatch();
  return (
    <div className="home">
      {products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            productName={item.productName}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
            onClick={() => {
              dispatch(
                addToCart({
                  id: item.id,
                  productName: item.productName,
                  price: item.price,
                  description: item.description,
                  imageUrl: item.imageUrl,
                })
              );
            }}
          />
        );
      })}
    </div>
  );
};

export default Home;
