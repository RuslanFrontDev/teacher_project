import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <>
      <div className="card-clothes">
        {products.map((item) => (
          <div className="card-clothes">
            <div className="card-title">
              <h1>{item.category}</h1>
            </div>
            <div className="card-img">
               <img src={item.image}/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Home;

//https://fakestoreapi.com/
