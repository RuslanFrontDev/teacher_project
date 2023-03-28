import React from "react";

const Card = ({ name, order }) => {

  return (
    <div style={{ backgroundColor: "#3b8fe3", paddingBottom: 5 }}>
      <h2 style={{ color: "#c90e0e" }}>{name}</h2>
      ({order})
    </div>
  );
};
export default Card;
