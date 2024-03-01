
import React from "react";
import ProductComponent from "./ProductComponent";

const BestSeller = () => {
  return (
    <div className="py-10 my-10 px-11">
      <p className="text-center text-2xl font-medium font-heading pb-8">
        Best Seller
      </p>
      <div className="py-5 grid grid-cols-4 gap-5">
        {
          [0,1,2,3,4,5,6,7].map((el) => {
            return <ProductComponent key={el}/>
          })
        }
      </div>
    </div>
  );
};

export default BestSeller;
