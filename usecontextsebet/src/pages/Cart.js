import React, { useContext } from "react";
import { CartStoreManagement } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const { cart } = useContext(CartStoreManagement);

  return (
    <div className="home">
      {cart.length == 0 ? (
        <h1>Your have no products</h1>
      ) : (
        cart.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              category={item.category}
              price={item.price}
              description={item.description}
              image={item.image}
              quantity={item.quantity}
              showAddButton={false}
              showDeleteButton={true}
            />
          );
        })
      )}
    </div>
  );
};

export default Cart;













// import React, { useContext } from "react";
// import { CartStoreManagement } from "../context/CartContext";
// import ProductCard from "../components/ProductCard";

// const Cart = () => {
//   const { cart } = useContext(CartStoreManagement);

//   return (
//     <div className="home">
//       {cart.length == 0 ? (
//         <h1>Your have no products</h1>
//       ) : (
//         cart.map((item) => {
//           return (
//             <ProductCard
//               key={item.id}
//               id={item.id}
//               productName={item.productName}
//               price={item.price}
//               description={item.description}
//               imageUrl={item.imageUrl}
//               quantity={item.quantity}
//               showAddButton={false}
//               showDeleteButton={true}
//             />
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default Cart;


