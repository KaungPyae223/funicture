import React from "react";
import ProductComponent from "./ProductComponent";
import { useSelector } from "react-redux";

const BestSeller = () => {
  const { BestSellingData } = useSelector((state) => state.home);
  return (
    <div className="py-10 my-10 lg:px-11 px-5">
      <p className="text-center text-2xl font-medium font-heading pb-8">
        Best Seller
      </p>
      <div className="py-5 grid lg:grid-cols-4 grid-cols-1 gap-5">
        {BestSellingData.map((el, i) => {
          return <ProductComponent key={i} data={el} />;
        })}
      </div>
    </div>
  );
};

export default BestSeller;
