import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [products,setProducts]=useState([])
  const [search,setSearch]=useState('')
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  },[]);



  const searchHandle=(e)=>{
    setSearch(e.target.value)
    const filterData=products.filter((product)=>{
      // console.log(product.category.toLowerCase());
      return product.category.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setProducts(filterData)
  }
  return (
    <>
      <header>
        <div className="container">
          <div className="card">
            <div className="title">
              <h1>Xoş Gəlmişsiniz</h1>
            </div>
            <div className="list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
            <div className="search">
               <input type='text' value={search} placeholder="paltarlari axtar" onChange={searchHandle} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
