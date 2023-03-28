import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Details = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const { productId } = useParams();

  useEffect(() => {
    axios(`http://localhost:5000/api/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err.response.data));
  }, [productId]);

  if (error !== "") {
    return <h1>{error}</h1>;
  }
  if (!product) return null;

  return (
    <div className="product-details">
      <div className="head">
        Product Details
        <Link to={`/edit/${product.id}`}>Edit</Link>
      </div>
      <img src={`http://localhost:5000/${product.productImage}`} alt="" />
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
      <p>{product.details}</p>
      <h1>{String(product.featured)}</h1>
    </div>
  );
};

export default Details;
