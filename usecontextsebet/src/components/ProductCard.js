import React, { useContext } from "react";
import { CartStoreManagement } from "../context/CartContext";
import "../styled/productcard.css";

const ProductCard = ({
  id,
  category,
  price,
  description,
  image,
  quantity,
  showAddButton = true,
  showDeleteButton = false,
}) => {
  const { addToCart, deleteCart } = useContext(CartStoreManagement);
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={image} alt="product" />
      </div>
      <div className="product-card-description">
        <p>{category}</p>
        <p>{description}</p>
        <span>Price {price}</span>
        {quantity && <p>Quantity {quantity}</p>}
      </div>
      {showAddButton && (
        <button
          onClick={() =>
            addToCart(id, category, price, description, image, quantity)
          }
        >
          Add Cart
        </button>
      )}

      {showDeleteButton && (
        <button onClick={() => deleteCart(id)}>Delete Cart</button>
      )}
    </div>
  );
};

export default ProductCard;







// import React, { useContext } from "react";
// import { CartStoreManagement } from "../context/CartContext";
// import "../styled/productcard.css";

// const ProductCard = ({
//   id,
//   productName,
//   price,
//   description,
//   imageUrl,
//   quantity,
//   showAddButton = true,
//   showDeleteButton = false,
// }) => {
//   const { addToCart, deleteCart } = useContext(CartStoreManagement);
//   return (
//     <div className="product-card">
//       <div className="product-card-img">
//         <img src={imageUrl} alt="product" />
//       </div>
//       <div className="product-card-description">
//         <p>{productName}</p>
//         <p>{description}</p>
//         <span>Price {price}</span>
//         {quantity && <p>Quantity {quantity}</p>}
//       </div>
//       {showAddButton && (
//         <button
//           onClick={() =>
//             addToCart(id, productName, price, description, imageUrl, quantity)
//           }
//         >
//           Add Cart
//         </button>
//       )}
//       {showDeleteButton && (
//         <button onClick={() => deleteCart(id)}>Delete Cart</button>
//       )}
//     </div>
//   );
// };

// export default ProductCard;
