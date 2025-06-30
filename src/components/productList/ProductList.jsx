import React from "react";


import ProductCard from "../product_modal/ProductCard";



const ProductList = ({title, data, fixedPrice, btnText, setModalActive}) => {
 
  return (
    <div>
      <h2 className='product_list_header'>{title}</h2>
      <div className="product_list_container">
        {data.map(( datum ) => (
          <ProductCard
            datum={datum}
            fixedPrice={fixedPrice}
            btnText={btnText}
            setModalActive={setModalActive}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
